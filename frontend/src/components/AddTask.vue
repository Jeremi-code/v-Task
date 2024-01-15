<template>
    <form class="add-form" @submit="onSubmit">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model=""/>
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text"/>
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" :checked="reminder" value="reminder" >
        </div>
        <button>Save Task</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const text = ref<String | null>(null)
        const day = ref<String | null>(null)
        const reminder = ref<boolean>(false)

        return {text,day,reminder}
    },
})
</script>
