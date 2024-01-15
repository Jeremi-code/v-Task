<script lang="ts">
import Task from "./components/Task.vue"
import { defineComponent } from "vue";
import { task } from "./types/TaskType";
import {onMounted,ref } from "vue";
export default defineComponent ({
  name : 'App',
  components : {Task},
  setup() {
    let tasks = ref<task[] | null> (null)
    const fetchTasks = async () => {
       const res = await fetch("http://localhost:5173/tasks")
       const data : task = await res.json()
       return data
    }
    const addTasks = async (task:task) => {
      const res : any = await fetch("http://localhost:5173/task",{
        method : 'POST',
        headers : {
          'Content-Type':'application/json'
        },
        body : JSON.stringify(task)
      })
      const data : task = res.json()
      tasks.value!.push(data)
    }

    const deleteTask = async (id : string) => {
       await fetch(`http://localhost:5173/task/${id}`, {
        method : 'DELETE'
      })
      if (tasks.value !== null) {
        tasks.value.filter((task) => task.id !== id)
      }
    }
    const fetchTask = async (id:string) => {
      const res = await fetch(`http://localhost:5173/task/${id}`)
      const data = res.json()
      return data
    }
    const toggleReminder = async (id:string) => {
      const res = await fetch(`http://localhost:5173/task/${id}`, {
        method : 'PUT'
      })
      const data : task = await res.json()
      tasks.value= tasks.value!.map((task : task) =>
        task.id===id ? {...task,reminder:data.reminder} : task
      )

    }
    onMounted(() => {

    })
    return {fetchTasks,fetchTask,toggleReminder,deleteTask,tasks,addTasks}
  }
});
</script>

<template>
  <div>
    <h1></h1>
  </div>
</template>

<style scoped></style>
