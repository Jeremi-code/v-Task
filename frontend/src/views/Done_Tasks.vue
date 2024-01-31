<template>
  <div>
    <Tasks v-if="tasks?.values" :Tasks="tasks" :onDelete="deleteTaskHandler"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted,ref } from "vue";
import Tasks from "../components/Tasks.vue"
import { fetchTasks,deleteTask } from "../services/ApiService";
import {task} from "../types/TaskType"
export default defineComponent({
  name: "Done_Tasks",
  components: {Tasks},
  setup() {
    let tasks = ref<task[] | null>(null)

    const deleteTaskHandler = async (id:string) => {
      await deleteTask(id)
      tasks.value = tasks.value!.filter((task) => task._id !== id)
    }
    onMounted (async () => {
      const getTasks = async () => {
        const data = await fetchTasks('Done' as string)
        tasks.value = data
      };
      getTasks();
    })
    return {tasks,deleteTaskHandler}
  },
});

</script>

<style>

</style>