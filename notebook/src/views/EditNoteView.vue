<template>
  <h1>Edit note {{ $route.params.id }}:</h1>
  <NoteForm v-model="note" @submitNote="editExistingNote" :allowCancel="false" />
</template>
<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNotesStore } from '@/stores/useNotesStore'
import NoteForm from '@/components/NoteForm.vue'
import type { Note } from '@/types/Note'
import { Routes } from '@/router/routes'

const note = reactive<Note>({
  title: '',
  content: ''
})

const { findById, update } = useNotesStore()

const route = useRoute()
const router = useRouter()

const editExistingNote = (note: Note) => {
  try {
    update(note)
    updateReactiveNote()
    alert('Note has been updated')
    router.push({ name: Routes.Notes })
  } catch (error) {
    alert('Error updating note')
  }
}

onBeforeMount(() => {
  updateReactiveNote()
})

const updateReactiveNote = () => {
  const storeNote = findById(parseInt(route.params.id as string))
  if (storeNote) {
    note.id = storeNote.id
    note.title = storeNote.title
    note.content = storeNote.content
    note.date = storeNote.date
  }
}
</script>
