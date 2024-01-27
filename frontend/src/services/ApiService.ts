import {task} from '../types/TaskType'

const fetchTasks = async (status : any) => {
  const res = await fetch(`/api/tasks?status=${status}`)
  const data: task[] = await res.json()
  return data
}
 const addTasks = async (task:task) => {
   const res : any = await fetch("/api/task",{
     method : 'POST',
     headers : {
       'Content-Type':'application/json'
     },
     body : JSON.stringify(task)
   })
   const data : task =  await res.json()
   return data
}

 const deleteTask = async (id : string) => {
    await fetch(`/api/task/${id}`, {
     method : 'DELETE'
   })
 }
 const fetchTask = async (id:string) => {
   const res = await fetch(`/api/task/${id}`)
   const data = await res.json()
   return data
 }
 const toggleReminder = async (id:string) => {
   const res = await fetch(`/api/task/${id}`, {
     method : 'PUT'
   })
   const data : task = await res.json()
   return data
 }

 export {fetchTasks, addTasks, deleteTask, fetchTask, toggleReminder}