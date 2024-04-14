<template>
  <div class="form-container">
    <input
      class="note-title"
      placeholder="Title..."
      v-model="newNote.title"
      ref="newNoteTitleRef"
    />
    <textarea
      rows="8"
      class="note-area"
      placeholder="Write your note..."
      v-model="newNote.content"
    ></textarea>
    <div class="btn-container">
      <button class="btn" @click.prevent="submit" :disabled="!newNote.title || !newNote.content">
        Submit
      </button>
      <button class="btn" @click.prevent="clearNoteContents">Cancel</button>
    </div>
    <div class="note-length">
      <p>{{ noteLength }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
/* IMPORTS */
import { ref, onMounted, computed, reactive } from 'vue'
import type { PropType } from 'vue'
import type { Note } from '@/types/Note'

/* PROPS */
const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true
  }
})
/* REFS */
const newNote = reactive<Note>({
  id: props.note.id,
  title: props.note.title,
  content: props.note.content,
  date: props.note.date
})
const newNoteTitleRef = ref<HTMLInputElement | null>(null)

/* COMPUTED */
const noteLength = computed<number>(() => {
  return !newNote.content ? 0 : newNote.content.length
})

/* FUNCTIONS */
const submit = () => {
  if (isValidNoteContent()) {
    emit('addNewNote', {
      id: 1,
      title: newNote.title,
      content: newNote.content,
      date: new Date()
    })
    clearNoteContents()
    focusNewNoteRef()
  }
}

const clearNoteContents = () => {
  newNote.title = ''
  newNote.content = ''
}

const focusNewNoteRef = () => {
  newNoteTitleRef.value?.focus()
}

const isValidNoteContent = (): boolean => {
  return newNote.title?.trim().length > 0 && newNote.content?.trim().length > 0
}

/* EMITS */
const emit = defineEmits<{
  addNewNote: [value: Note]
}>()

/* LIFECYCLE */
onMounted(() => {
  focusNewNoteRef()
})
</script>

<style scoped>
.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--vt-c-blue);
  border-radius: 5px;
}
.note-title {
  line-height: 2rem;
  font-size: large;
  font-weight: bold;
  color: var(--vt-c-navy);
}
.note-area {
  margin: 1rem 0;
  border-radius: 3px;
}
.btn-container {
  display: flex;
  gap: 10px;
  margin: 1rem 0 0 0;
}
.note-length {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -15px;
  right: -15px;
  margin: 0.1rem 0.1rem;
  width: 46px;
  height: 46px;
  background-color: var(--vt-c-white-soft);
  border: 2px solid var(--vt-c-mint);
  border-radius: 50%;
  font-weight: bold;
}
</style>
