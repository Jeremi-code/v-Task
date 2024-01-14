<script  lang="ts">
  import Task from "./components/Task.vue"
  import { defineComponent } from "vue";
  export default defineComponent ({
    name : 'App',
    components : {Task},
    setup() {
      const fetchTasks = async () {
         const res = await fetch("http://localhost:5173/tasks")
         const data = res.json()
         return data
      }
    }

  });

</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
