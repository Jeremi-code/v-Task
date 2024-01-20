<template>
    <div>
        <div v-for="Task in Tasks">
            <Task :Task="Task"/>
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
        Tasks : Array as PropType<task[]>
    }
    

})
</script>

<style>

</style>