<template>
  <div>
    <AddTask v-if="showAdd" :addTask="addTaskHandler" />
    <Tasks v-if="tasks?.values " :Tasks="tasks" :onToggle="toggleReminderHandler" :onDelete="deleteTaskHandler" :onCompleted="toggleCompletedHandler"/>
    <div v-else class="notask">
      <h3>No Tasks To Show</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ref, onMounted } from "vue";
import { task } from "../types/TaskType";
import {deleteTask, fetchTasks, toggleReminder,addTasks,toggleIsCompleted} from '../services/ApiService'
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { AddTask,Tasks },
  name: "Home",
  setup() {
    let tasks = ref<task[] | null>(null);
    const toggleReminderHandler = async (id : string) => {
      const data = await toggleReminder(id);
      tasks.value = tasks.value!.map((task: task) =>
        task._id === id ? { ...task, reminder: data.reminder } : task
      );
    }
    const store = useStore()
    const deleteTaskHandler = async (id:string) => {
      await deleteTask(id);
      tasks.value = tasks.value!.filter((task) => task._id !== id);
    };
    const addTaskHandler = async (task:task) => {
      const data = await addTasks(task);
      tasks.value!.push(data);   
    };
    const showAdd = computed(() => {
      return store.getters.showAdd
    })
    const toggleCompletedHandler = async(id:string) => {
      const data = await toggleIsCompleted(id)
      tasks.value = tasks.value!.filter((task) => task._id !== data._id) 
    }

    onMounted(async () => {
      const getTasks = async () => {
        const data = await fetchTasks('undone' as string);
        tasks.value = data;
      };
      getTasks();
    });
    return {toggleReminderHandler,tasks,deleteTaskHandler,showAdd,addTaskHandler,toggleCompletedHandler};
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