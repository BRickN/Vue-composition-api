<template>
  <div class="form-container">
    <input
      class="note-title"
      placeholder="Title..."
      v-model="activeNote.title"
      ref="newNoteTitleRef"
      v-autofocus
    />
    <textarea
      rows="8"
      class="note-area"
      placeholder="Write your note..."
      v-model="activeNote.content"
    ></textarea>
    <div class="btn-container">
      <button
        class="btn"
        @click.prevent="submit"
        :disabled="!activeNote.title || !activeNote.content"
      >
        Submit
      </button>
      <button class="btn" @click.prevent="clearNoteContents" v-if="allowCancel">Cancel</button>
    </div>
    <div class="note-length">
      <p>{{ noteLength }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
/* IMPORTS */
import { ref, computed, reactive, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { Note } from '@/types/Note'
import { useWatchCharacters } from '@/use/useWatchCharacters'
/*
  PROPS
*/
const props = defineProps({
  modelValue: {
    type: Object as PropType<Note>,
    required: false
  },
  allowCancel: {
    type: Boolean,
    default: true,
    required: false
  }
})

/* REFS */
const activeNote = reactive<Note>({
  id: props.modelValue?.id,
  title: props.modelValue?.title ?? '',
  content: props.modelValue?.content ?? '',
  date: props.modelValue?.date
})
const newNoteTitleRef = ref<HTMLInputElement | null>(null)

/* EMITS */
const emits = defineEmits<{
  submitNote: [note: Note]
}>()

/* COMPUTED */
const noteLength = computed<number>(() => {
  return !activeNote.content ? 0 : activeNote.content.length
})

/* FUNCTIONS */
const submit = () => {
  if (isValidNoteContent()) {
    emits('submitNote', activeNote)
  }
}

const clearNoteContents = () => {
  activeNote.title = ''
  activeNote.content = ''
}

const isValidNoteContent = (): boolean => {
  return activeNote.title?.trim().length > 0 && activeNote.content?.trim().length > 0
}

/* WATCH */
useWatchCharacters(activeNote, 500)
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
  margin: 1rem 0 0 0;
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
