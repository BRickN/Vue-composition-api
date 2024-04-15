import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/types/Note'

export const useNotesStore = defineStore('notesStore', () => {
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

  /* COMPUTED */
  const notesLength = computed<number>(() => {
    return notes.value.length
  })

  const addNote = (note: Note) => {
    notes.value.push({
      id: notesLength.value + 1,
      title: note.title,
      content: note.content,
      date: note.date
    })
  }

  const deleteNote = (note: Note) => {
    const idx = notes.value.indexOf(note)
    notes.value.splice(idx, 1)
  }

  return { notes, addNote, deleteNote }
})
