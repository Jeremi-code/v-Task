<template>
    <header class = "header">
        <h1>Task Tracker</h1>
        <CustomButton :onClick="onAdd" :title="showAdd ? 'Close' : 'Add'" :color = "showAdd ? 'red' : 'green'"/>
        
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import CustomButton from "./CustomButton.vue"
    export default defineComponent({
        name : 'Header',
        components : {CustomButton},
        props : {
            onAdd : Function,
            showAdd : Boolean
        }
    })
    

</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

</style>