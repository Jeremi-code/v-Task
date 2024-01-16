<template>
    <form class="add-form" @submit="onSubmit">
        <div class="form-control">
            <label>Task</label>
            <input type="text" @change="setText(($event.target as HTMLInputElement).value)" v-model="text">
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" @change="setDate(($event.target as HTMLInputElement).value)" v-model="day"/>
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" @change="setReminder(($event.target as HTMLInputElement).checked)" v-model="reminder" >
        </div>
        <button>Save Task</button>
    </form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // props:{
        
    // }
    setup() {
        const text = ref<String | null>(null)
        const day = ref<String | null>(null)
        const reminder = ref<boolean>(false)

        const setText = (target:string) => {
            text.value = target
        }
        const setDate = (target:string) => {
            day.value = target
        }
        const setReminder = (target:boolean) => {
            reminder.value = target 
        }
        const onSubmit = (event:Event) => {
            event.preventDefault()
            // onAdd({text : text.value,day : day.value , reminder : reminder.value})
            setText('')
            setDate('')
            setReminder(false)
        }
        return {text,day,reminder,setText,setDate,setReminder,onSubmit}
    },
})
</script>
