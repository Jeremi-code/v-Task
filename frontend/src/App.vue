<script lang="ts">
import Task from "./components/Task.vue"
import Header from "./components/Header.vue"
import { defineComponent } from "vue";
import { task } from "./types/TaskType";
import {onMounted,ref } from "vue";
import AddTask from "./components/AddTask.vue";
export default defineComponent ({
  name : 'App',
  components : { Task, Header, AddTask },
  setup() {
    let tasks = ref<task[] | null> (null)
    const showAdd = ref<boolean>(false)
    const fetchTasks = async () => {
       const res = await fetch("http://localhost:5173/tasks")
       const data : task[] = await res.json()
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
      const data : task =  await res.json()
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
      const data = await res.json()
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
    const toggleShowAdd = () => {
      showAdd.value = !showAdd.value
    }
    onMounted(async () => {
      const getTasks = async () => {
        const data = await fetchTasks()
        tasks.value=data
      }

      await getTasks()

    })
    return {fetchTasks,fetchTask,toggleReminder,deleteTask,tasks,addTasks,showAdd,toggleShowAdd}
  }
});
</script>

<template>
  <div class="container">
    <Header :showAdd="showAdd" :onAdd="toggleShowAdd"/>
    <AddTask v-if="showAdd" :addTask="addTasks" />
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

</style>
