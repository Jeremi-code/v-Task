<template>
    <div>
        <div v-for="task in tasks">
            <Task/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from "./Task.vue"
export default defineComponent ({
    name : 'Tasks',
    components: {Task},
    

})
</script>

<style>

</style>