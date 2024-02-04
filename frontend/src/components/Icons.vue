<template>
  <div>
    <div v-if="currentRoute == '/'" class="icons">
      <input type="checkbox" @change="() => onCompleted(task_id)" />
      <FaTimes :onDelete="onDelete" :task_id="task_id" />
    </div>
    <div v-else class="icons">
      <Undo :onCompleted="onCompleted" :task_id="task_id" />
      <FaTimes :onDelete="onDelete" :task_id="task_id" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FaTimes from "./FaTimes.vue";
import Undo from "./Undo.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Task",
  components: { FaTimes, Undo },
  props: {
    onDelete: {
      required: true,
      type: Function,
    },
    task_id: String,
    onCompleted: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const currentRoute = router.currentRoute.value.path;

    return { currentRoute };
  },
});
</script>
<style>
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
}
</style>
