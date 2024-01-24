<template>
    <div>
        <div v-for="Task in Tasks" v-bind:key="Task._id">
            <Task :Task="Task" :onToggle="onToggle" :onDelete="onDelete"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Task from "./Task.vue"
import { task } from '../types/TaskType';
export default defineComponent ({
    name : 'Tasks',
    components: {Task},
    props : {
        Tasks : Array as PropType<task[]>,
        onToggle:{
            required : true,
            type : Function 
        },
        onDelete: {
            type : Function,
            required : true
        }
    }
    

})
</script>

<style>

</style>