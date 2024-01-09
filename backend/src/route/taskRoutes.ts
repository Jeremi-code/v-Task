
const fetchTsks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const fetchTsk = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const createTsk = async (req: Request, res: Response) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    }
const updateTsk = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            task.title = title;
            task.description = description;
            const updatedTask = await task.save();
            res.json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const deleteTsk = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            await task.remove();
            res.json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }