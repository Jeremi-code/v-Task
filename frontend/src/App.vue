<!-- <script lang="ts">
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
       tasks.value = tasks.value!.filter((task) => task._id !== id)
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
        task._id===id ? {...task,reminder:data.reminder} : task
      )
    }
    const toggleShowAdd = () => {
      showAdd.value = !showAdd.value
    }
    onMounted( () => {
      const getTasks = async () => {
        const data = await fetchTasks()
        tasks.value=data
      }
       getTasks()
    })
    return {fetchTasks,fetchTask,toggleReminder,deleteTask,tasks,addTasks,showAdd,toggleShowAdd}
  }
});
</script>

<template>
  <div class="container">
    <Header :showAdd="showAdd" :onAdd="toggleShowAdd"/>
    <AddTask v-if="showAdd" :addTask="addTasks" />
    <Tasks v-if="tasks?.values " :Tasks="tasks" :onToggle="toggleReminder" :onDelete="deleteTask"/>
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

</style> -->
<template>
  <div class="container">
    <Header :showAdd="showAdd" :onAdd="toggleShowAdd" />
    <div class="contents">
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/done_tasks">Done_Tasks</router-link>
      </div>
      <AddTask v-if="showAdd" :addTask="addTasks" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./components/Header.vue";
// import { RouterLink,RouterView } from 'vue-router';
// import Home from "./views/Home.vue";
// import Done_Tasks from "./views/Done_Tasks.vue";
export default defineComponent ({
    name : 'App',
    components : {Header},
    setup() {
    const showAdd = ref<boolean>(false)
    const toggleShowAdd = () => {
      showAdd.value = !showAdd.value
    }
      return {toggleShowAdd,showAdd}
    }
  });
</script>

<style >
*{
  box-sizing : border-box;
  padding : 0px;
  margin : 0px;
}
.container {
  display : flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  font-family : 'poppins', sans-serif;
}
.links {
 display : flex; 
 justify-content: center;
 font-family : 'Oswald', sans-serif;
}
.links a {
  margin : 10px;
}
a {
  text-decoration : none;
  color : black;
  font-size : 20px;
}

</style>