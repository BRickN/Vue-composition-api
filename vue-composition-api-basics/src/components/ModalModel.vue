<script setup lang="ts">
import type { User } from '@/types/User'
import { inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  darkMode: {
    type: Boolean,
    default: false
  }
})
/*
    emits
*/
defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const user: User | undefined = inject('user')
console.log(user?.name)
</script>

<script lang="ts">
export default {
  name: 'ModalItem'
}
</script>

<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modalModel" :class="{ 'dark-modal': darkMode }">
      <h1><slot name="title"></slot></h1>
      <p><slot name="text"></slot></p>
      <button @click.prevent="$emit('update:modelValue', false)">hide modalModel</button>
    </div>
  </teleport>
</template>

<style scoped>
.modalModel {
  background: gray;
  padding: 10px;
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  max-width: 50%;
  height: 50%;
}
.dark-modal {
  background: red;
}
</style>
