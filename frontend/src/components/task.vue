<template>
  <div :class="{task:true , reminder:Task.reminder}" @dblclick="() => onToggle(Task._id)">
    <h3>{{ Task.text }}
      <Icons :task_id="Task._id" :onDelete="onDelete"/>
    </h3>
    <p>{{ Task.day }}</p>
  </div>
</template>

<script lang="ts">
import { task } from "../types/TaskType";
import FaTimes from "./FaTimes.vue";
import Icons from "./Icons.vue";
import { defineComponent, PropType } from "vue";
export default defineComponent ({
  name : 'Task',
  components : {FaTimes,Icons},
  props : {
    Task : {
      required : true,
      type : Object as PropType<task>
    },
    onToggle : {
      required : false,
      type : Function, 
      default : null
    },
    onDelete : {
      required : true ,
      type : Function

  }
  },
  setup() {
    const checkboxclick=() => {
      console.log('gotta ya')
    }
    return {checkboxclick}
  }
  }
)

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
  margin:0;
  justify-content: space-between;
}
.task p {
  margin : 0;
}

</style>
