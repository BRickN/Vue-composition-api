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
  const totalNotesCount = computed<number>(() => {
    return notes.value.length
  })
  const totalCharacters = computed<number>(() => {
    return notes.value.reduce((total, note) => {
      return total + note.content.length
    }, 0)
  })
  const addNote = (note: Note) => {
    notes.value.push({
      id: totalNotesCount.value + 1,
      title: note.title,
      content: note.content,
      date: note.date
    })
  }

  const deleteNote = (note: Note) => {
    const idx = notes.value.indexOf(note)
    notes.value.splice(idx, 1)
  }

  const editNote = (note: Note) => {
    const noteToEdit = notes.value.filter((x) => {
      return x.id === note.id
    })[0]
    const idx = notes.value.indexOf(noteToEdit);
    notes.value[idx] = note;
  }

  const getNote = (id: number) : Note | undefined => {
    return notes.value.filter((x) => {
      return x.id === id
    })[0]
  }

  return { notes, totalNotesCount, totalCharacters, addNote, deleteNote, getNote, editNote }
})
