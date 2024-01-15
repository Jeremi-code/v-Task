<template>
    <form class="add-form" @submit="onSubmit">
        <div class="form-control">
            <label>Task</label>
            <input type="text"/>
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text"/>
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox">
        </div>
        <button>Save Task</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
