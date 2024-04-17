<template>
  <h1>Edit note {{ $route.params.id }}:</h1>
  <NoteForm v-model="note" @submitNote="editExistingNote" :allowCancel="false" />
</template>
<script setup lang="ts">
import { reactive, watch, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNotesStore } from '@/stores/useNotesStore'
import NoteForm from '@/components/NoteForm.vue'
import type { Note } from '@/types/Note'
import { Routes } from '@/router/routes'

const note = reactive<Note>({
  title: '',
  content: ''
})

const { getNote, editNote } = useNotesStore()

const route = useRoute()
const router = useRouter()

const editExistingNote = (note: Note) => {
  try {
    editNote(note)
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
  const storeNote = getNote(parseInt(route.params.id as string))
  if (storeNote) {
    note.id = storeNote.id
    note.title = storeNote.title
    note.content = storeNote.content
    note.date = storeNote.date
  }
}
// watch(
//   () => route.params.id,
//   (newId) => {
//     Object.assign(note, getNote(parseInt(newId as string)))
//     console.log(note)
//     // note = getNote(parseInt(newId as string))
//   }
// )

// onMounted(() => {
//   getNote(parseInt(route.params.id))
// })
</script>
