<template>
    <div>
        <div v-for="Task in Tasks" v-bind:key="Task._id">
            <Task :Task="Task" :onToggle="onToggle" :onDelete="onDelete" :onCompleted="onCompleted"/>
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
            required :false,
            type : Function,
            default : null
        },
        onDelete: {
            type : Function,
            required : true
        },
        onCompleted : {
            type : Function,
            required : true
        }
    }
})
</script>

<style>

</style>