<template>
  <div class="notes">
    <h1>Notes</h1>
    <NoteForm @addNewNote="updateNotes" :note="activeNote" />
    <NoteCard
      @editNote="editNote"
      @deleteNote="deleteNote"
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
import type { Note } from '@/types/Note'

const notes = ref<Note[]>([
  {
    id: 1,
    title: 'Flex1',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 2,
    title: 'Flex2',
    content:
      'rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 3,
    title: 'Flex3',
    content:
      'S3d ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 4,
    title: 'Flex4',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  }
])
const activeNote = reactive<Note>({
  title: '',
  content: ''
})

/* COMPUTED */
const notesLength = computed<number>(() => {
  return notes.value.length
})

const updateNotes = (noteContent: Note) => {
  notes.value.push({
    id: notesLength.value + 1,
    title: noteContent.title,
    content: noteContent.content,
    date: noteContent.date
  })
}

const editNote = (note: Note) => {
  Object.assign(activeNote, note)
}

const deleteNote = (note: Note) => {
  const idx = notes.value.indexOf(note)
  notes.value.splice(idx, 1)
}
</script>
