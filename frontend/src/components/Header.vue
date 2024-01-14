<template>
    <header class = "header">
        <h1>Task Tracker</h1>
        <Button :onClick="onAdd" :title="showAdd ? 'Close' : 'Add'" :color = "showAdd ? 'red' : 'green'"></Button>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Button from "./Button.vue"
    export default defineComponent({
        name : 'Header',
        component : {Button},
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