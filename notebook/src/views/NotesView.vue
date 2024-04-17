<template>
  <div class="notes">
    <h1>Notes</h1>
    <NoteForm @submitNote="submitNote" />
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
import { useNotesStore } from '@/stores/useNotesStore'
import type { Note } from '@/types/Note'

const { notes, addNote } = useNotesStore()
const submitNote = (note: Note) => {
  addNote(note)
}
</script>
