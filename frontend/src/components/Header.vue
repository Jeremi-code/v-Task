<template>
    <header class = "header">
        <h1>Task Tracker</h1>
        <CustomButton :onAdd="onAdd" :title="showAdd ? 'Close' : 'Add'" :color = "showAdd ? 'red' : 'green'"/>    
    </header>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import CustomButton from "./CustomButton.vue"
    export default defineComponent({
        name : 'Header',
        components : {CustomButton},
        props : {
            onAdd : {
                required:true,
                type:Function as PropType <(event:MouseEvent) => void>
            },
            showAdd : Boolean
        },

    })
    

</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

</style>