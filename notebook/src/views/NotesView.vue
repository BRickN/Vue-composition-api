<template>
  <div class="notes">
    <h1>Notes</h1>
    <NoteForm @submitNote="submitNote" />
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
    <div class="placeholder" v-if="!notesStore.notes.length">No notes here yet...</div>
  </div>
</template>

<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/useNotesStore'
import type { Note } from '@/types/Note'
import { onMounted } from 'vue'

const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)

const submitNote = async (note: Note) => {
  await notesStore.create(note)
}

onMounted(async () => {
  await notesStore.init()
})
</script>

<style scoped>
.placeholder {
  margin: 2rem 0;
  text-align: center;
  font-size: 35px;
  color: gray;
  opacity: 0.7;
}
</style>
