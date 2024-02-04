import mongoose, { Document } from "mongoose";
import { task } from "../types/TaskType";
const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  reminder: {
    type: Boolean,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});
const Task = mongoose.model<task>("Task", taskSchema);
export default Task;
