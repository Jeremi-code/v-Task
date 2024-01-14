<script  lang="ts">
  import Task from "./components/Task.vue"
  import { defineComponent } from "vue";
import { application, json } from "express";
  export default defineComponent ({
    name : 'App',
    components : {Task},
    setup() {
      const tasks = ref ()
      const fetchTasks = async () => {
         const res = await fetch("http://localhost:5173/tasks")
         const data = res.json()
         return data
      }
      const addTasks = async (task) => {
        const res = await fetch("http://localhost:5173/task",{
          method : 'POST',
          headers : {
            'Content-Type':'application/json'
          },
          body : JSON.stringify(task)
        })
        const data = res.json()
        tasks = [...tasks,data]
      }
      
      const deleteTask = async (id : string) => {
        const res = await fetch(`http://localhost:5173/task/${id}`, {
          method : 'DELETE'
        })
        tasks.filter((task) => task.id !== id)
      }
      const fetchTask = async (id:string) => {
        const res = await fetch(`http://localhost:5173/task/${id}`)
        const data = res.json()
        return data
      }
      const toggleReminder = async (id:string) => {
        const taskToggle = await fetch(`http://localhost:5173/task/${id}`)
        const updTask = {...taskToggle,reminder : !taskToggle.reminder}
        const res = await fetch(`http://localhost:5173/task/${id}`, {
          method : 'PUT'
        })
        const data = res.json()
        tasks = tasks.map((task) => 
          task.id===id ? {...task,reminder:data.reminder} : task
        )

      }
  

  });

</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
