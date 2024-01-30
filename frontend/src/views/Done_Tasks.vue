<template>
  <div>
    <Tasks v-if="tasks?.values" :Tasks="tasks" :onToggle="onToggle"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted,ref } from "vue";
import Tasks from "../components/Tasks.vue"
import { fetchTasks } from "../services/ApiService";
import {task} from "../types/TaskType"
export default defineComponent({
  name: "Done_Tasks",
  components: {Tasks},
  setup() {
    let tasks = ref<task[] | null>(null)
    const onToggle= () => {
      console.log('just for now')
    }
    onMounted (async () => {
      const getTasks = async () => {
        const data = await fetchTasks('Done' as string)
        tasks.value = data
      };
      getTasks();
    })
    return {tasks,onToggle}
  },
});

</script>

<style>

</style>