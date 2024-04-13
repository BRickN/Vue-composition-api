<template>
  <div class="notes">
    <h1>Notes</h1>
    <NoteForm @addNewNote="updateNotes" />
    <NoteCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>
<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
import type { Note } from '@/types/Note'
import { ref } from 'vue'

const notes = ref<Note[]>([
  {
    id: 1,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 2,
    content:
      'rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 3,
    content:
      'S3d ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  },
  {
    id: 4,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
    date: new Date()
  }
])

const updateNotes = (nodeContent: string) => {
  notes.value.push({
    id: notes.value.length + 1,
    content: nodeContent,
    date: new Date()
  })
}
</script>
