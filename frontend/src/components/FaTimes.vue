<template>
    <div style="color:red;font-size:25px" @click="()=>onDelete(task_id)">&times;</div>
</template>

<script lang="ts">
    import { defineComponent} from "vue";
    export default defineComponent ({
        name : 'FaTimes',
        props : {
        task_id : String,
        onDelete: {
            type : Function,
            required : true
        }
        }
    })
</script>