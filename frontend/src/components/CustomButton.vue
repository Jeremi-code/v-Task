<template>
  <div>
    <button class="btn" :style="{ background: color }" @click="onAdd">
      {{ title }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CustomButton",
  props: {
    title: String,
    color: String,
    onAdd: {
      required: true,
      type: Function as PropType<(event: MouseEvent) => void>,
    },
  },
});
</script>

<style>
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
</style>
