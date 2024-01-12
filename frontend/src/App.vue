<script setup lang="ts">
import { TrackOpTypes } from 'vue';
import {task} from './types/TaskType'
  name : 'Task'
  props : defineProps< {
    'task' : task,
    'onDelete' :any ,
    'onToggle' : any ,
  }> ();
  setup() {

  }
</script>

<template>
  <div :class="task.reminder ? reminder  : "">
  <h3>{{ task.text }} X</h3>
  <p>{{ task.day }}</p>
</div>
</template>

<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
