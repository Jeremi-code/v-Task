<template>
  <div :class="{task:true , reminder:Task.reminder}">
    <h3>{{ Task.text }}</h3>
    <p>{{ Task.day }}</p>
  </div>
</template>

<script lang="ts">
import { task } from "../types/TaskType";
import { defineComponent, PropType } from "vue";
export default defineComponent ({
  name : 'Task',
  props : {
    Task : {
      required : true,
      type : Object as PropType<task>
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
