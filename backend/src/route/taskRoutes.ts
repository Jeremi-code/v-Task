import express, {Router} from 'express'
import { fetchTask,fetchTasks,createTask,updateTask,deleteTask } from '../controller/taskController'
const route:Router = express.Router() 
route.get('/task/:id',fetchTask)
route.get('/tasks',fetchTasks)
route.post('/task',createTask)
route.put('/task/:id',updateTask)
route.delete('/task/:id',deleteTask)

export default route