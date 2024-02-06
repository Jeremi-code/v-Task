<template>
  <div>
    <Tasks v-if="tasks?.values" :Tasks="tasks" :onDelete="deleteTaskHandler" :onCompleted="toggleCompletedHandler"/>
    <div v-else class="notask">
      <h3>No Tasks To Show</h3>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted,ref } from "vue";
import Tasks from "../components/Tasks.vue"
import { fetchTasks,deleteTask,toggleIsCompleted } from "../services/ApiService";
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
    const toggleCompletedHandler = async(id:string) => {
      const data = await toggleIsCompleted(id)
      tasks.value = tasks.value!.filter((task) => task._id !== data._id) 
    }
    onMounted (async () => {
      const getTasks = async () => {
        const data = await fetchTasks('Done' as string)
        tasks.value = data
      };
      getTasks();
    })
    return {tasks,deleteTaskHandler,toggleCompletedHandler}
  },
});

</script>
<style>
.notask {
  display : flex;
  justify-content : center;
  align-items : center;
  margin:50px 0;
}
</style>