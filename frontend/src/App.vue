<script lang="ts">
import Tasks from "./components/Tasks.vue"
import Header from "./components/Header.vue"
import { defineComponent } from "vue";
import { task } from "./types/TaskType";
import {onMounted,ref } from "vue";
import AddTask from "./components/AddTask.vue";
export default defineComponent ({
  name : 'App',
  components : { Tasks, Header, AddTask },
  setup() {
    let tasks = ref<task[] | null> (null)
    const showAdd = ref<boolean>(false)
    const fetchTasks = async () => {
       const res = await fetch("/api/tasks")
       const data : task[] = await res.json()
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
      tasks.value!.push(data)
    }

    const deleteTask = async (id : string) => {
       await fetch(`/api/task/${id}`, {
        method : 'DELETE'
      })
      if (tasks.value !== null) {
        tasks.value.filter((task) => task.id !== id)
      }
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
      tasks.value= tasks.value!.map((task : task) =>
        task.id===id ? {...task,reminder:data.reminder} : task
      )
      
    }
    const toggleShowAdd = () => {
      showAdd.value = !showAdd.value
    }
    onMounted( () => {
      const getTasks = async () => {
        const data = await fetchTasks()
        tasks.value=data
        console.log(data,'inin')
      }
       getTasks()
      console.log(tasks)

    })
    return {fetchTasks,fetchTask,toggleReminder,deleteTask,tasks,addTasks,showAdd,toggleShowAdd}
  }
});
</script>

<template>
  <div class="container">
    <Header :showAdd="showAdd" :onAdd="toggleShowAdd"/>
    <AddTask v-if="showAdd" :addTask="addTasks" />
    <Tasks v-if="tasks?.values " :Tasks="tasks"/>
  </div>
</template>

<style scoped>
*{
  box-sizing : border-box;
  padding : 0px;
  margin : 0px;
}
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
