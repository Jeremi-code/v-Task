import { Request, Response } from "express";
import Task from "../model/task";
import { task } from "../types/TaskType";

const fetchTasks = async (req: Request, res: Response) => {
  try {
    const status = req.query.status;
    if (status === "Done") {
      const tasks: task[] | null = await Task.find({ isCompleted: true });
      res.json(tasks);
    } else if (status === "undone") {
      const tasks: task[] | null = await Task.find({ isCompleted: "false" });
      res.json(tasks);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const fetchTask = async (req: Request, res: Response) => {
  try {
    const task: task | null = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req: Request, res: Response) => {
  const task: task = new Task({
    text: req.body.text,
    day: req.body.day,
    reminder: req.body.reminder,
    isCompleted: req.body.isCompleted,
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
const updateTask = async (req: Request, res: Response) => {
  const { reminder, isCompleted } = req.body;
  try {
    const task: task | null = await Task.findById(req.params.id);
    if (task) {
      if (isCompleted !== undefined) {
        task.isCompleted = !task.isCompleted;
      }
      if (reminder !== undefined) {
        task.reminder = !task.reminder;
      }
      const updatedTask = await task.save();
      res.status(201).json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req: Request, res: Response) => {
  try {
    const task: task | null = await Task.findById(req.params.id);
    if (task) {
      await task.deleteOne();
      res.json({ message: "Task deleted" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { fetchTask, fetchTasks, createTask, updateTask, deleteTask };
