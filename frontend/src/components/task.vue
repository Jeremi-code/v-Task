<template>
  <div :class="{task:true , reminder:task.reminder}">
    <h3>{{ task.text }}</h3>
    <p></p>
  </div>
</template>

<script lang="ts">
import { task } from "../types/TaskType";
import { defineComponent, PropType } from "vue";
export default defineComponent ({
  name : 'Task',
  props : {
    task : {
      required : true,
      type : Array as PropType<task[]>
    },
    onToggle : {
      required : true,
      type : Function
    },
    onDelete : {
      required : true ,
      type : Function

  }
  }
})

</script>

<style>
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
