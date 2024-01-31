<template>
    <div>
        <div v-if="currentRoute=='/'" class="icons">
            <input type="checkbox" @change="checkboxclick"/>
            <FaTimes :onDelete="onDelete" :task_id="task_id"/>
        </div>
        <div v-else class="icons">
            <Undo/>
            <FaTimes :onDelete="onDelete" :task_id="task_id"/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FaTimes from "./FaTimes.vue";
import Undo from "./Undo.vue";
import { useRouter } from "vue-router";
export default defineComponent ({
    name : 'Task',
    components : {FaTimes,Undo},
    props : { 
        onDelete : {
            required : true ,
            type : Function
        },
        task_id : String
    },
    setup() {
        const router = useRouter();

        const currentRoute = router.currentRoute.value.path;
        console.log(currentRoute)
        
        const checkboxclick=() => {
            console.log('gotta ya')
        }
        return {checkboxclick,currentRoute}
    }
}
)
</script>
<style>
.icons {
    display: flex;
    justify-content: space-between;
    width: 50px;
}
</style>