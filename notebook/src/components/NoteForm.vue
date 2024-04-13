<template>
  <div class="form-container">
    <textarea
      rows="8"
      class="note-area"
      placeholder="Write your note..."
      v-model="newNoteContent"
    ></textarea>
    <div class="btn-container">
      <button class="btn" @click.prevent="submit">Submit</button>
      <button class="btn" @click.prevent="cancel">Cancel</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const newNoteContent = ref<string | undefined>()

const emit = defineEmits<{
  addNewNote: [value: string]
}>()

const submit = () => {
  if (typeof newNoteContent.value !== 'undefined' && newNoteContent.value?.trim().length > 0) {
    emit('addNewNote', newNoteContent.value)
  }
}
const cancel = () => {
  newNoteContent.value = ''
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--vt-c-blue);
  border-radius: 5px;
}
.note-area {
  border-radius: 3px;
}
.btn-container {
  display: flex;
  gap: 10px;
  margin: 1rem 0 0 0;
}
</style>
