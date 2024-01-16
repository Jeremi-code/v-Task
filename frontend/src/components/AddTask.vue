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
        <input type="submit" value="Save Task" class="btn btn-block"/>
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
<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

</style>