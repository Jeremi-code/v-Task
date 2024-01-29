<template>
    <header class = "header">
        <h1>Task Tracker</h1>
        <CustomButton :onAdd="onAdd" :title="showAdd ? 'Close' : 'Add'" :color = "showAdd ? 'red' : 'green'"/>    
    </header>
</template>

<script lang="ts">
    import { computed, defineComponent } from "vue";
    import { useStore } from "vuex";
    import CustomButton from "./CustomButton.vue"
    export default defineComponent({
        name : 'Header',
        components : {CustomButton},
        // props : {
        //     onAdd : {
        //         required:true,
        //         type:Function as PropType <(event:MouseEvent) => void>
        //     },
        //     showAdd : Boolean
        // },
        setup() {
            const store = useStore()
            const onAdd = () => {
                store.commit('toggleShowAdd')
            }
            const showAdd = computed(() => {
                return store.getters.showAdd
            })
            return {onAdd,showAdd}
        }

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