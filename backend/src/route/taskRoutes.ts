import express, {Router} from 'express'
import { fetchTask,fetchTasks,createTask,updateTask,deleteTask } from '../controller/taskController'
const taskRouter:Router = express.Router() 
taskRouter.get('/task/:id',fetchTask)
taskRouter.get('/tasks',fetchTasks)
taskRouter.post('/task',createTask)
taskRouter.put('/task/:id',updateTask)
taskRouter.delete('/task/:id',deleteTask)

export default taskRouter