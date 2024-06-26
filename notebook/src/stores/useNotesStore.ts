import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  CollectionReference,
  Query,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  updateDoc, } from 'firebase/firestore';
import type { DocumentData,  Unsubscribe } from 'firebase/firestore';
import { db } from '@/includes/firebase'
import type { Note } from '@/types/Note'
import type { Timestamp } from 'firebase/firestore/lite';

let notesCollection: CollectionReference<DocumentData, DocumentData>;
let queryNotesCollection: Query;
let notesSnapshotUnsubscribe: Unsubscribe | null = null;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref<Note[]>([])
  const isLoading = ref<boolean>(false)

  /* COMPUTED */
  const totalNotesCount = computed<number>(() => {
    return notes.value.length
  })
  const totalCharacters = computed<number>(() => {
    return notes.value.reduce((total, note) => {
      return total + note.content.length
    }, 0)
  })

  /* FUNCTIONS */
  const init =  (uid?: string) => {
    if(!uid){
      return
    }

    notesCollection = collection(db, 'users', uid, 'notes')
    queryNotesCollection = query(notesCollection, orderBy('date', 'desc'))
    fetch();
  }

  const fetch =  () => {
    isLoading.value = true;
    if(notesSnapshotUnsubscribe){
      notesSnapshotUnsubscribe()
    }
    setTimeout(() => {
      notesSnapshotUnsubscribe = onSnapshot(queryNotesCollection, (querySnapshot) => {
        clearNotes();

          querySnapshot.forEach(doc => {
            const { title, content, date } = doc.data() as { title: string, content: string, date: Timestamp };;
            const note: Note = {
              id: doc.id,
              title: title,
              content: content,
              date: date.toDate()
            }
            notes.value.push(note)
          })

      }, (error) => {
        console.log(error.message)
      })
      isLoading.value = false
    }, 1000)
  }

  const clearNotes = () => {
    notes.value = []
  }

  const create = async (note: Note) => {
    const { title, content, date } = note;
    await addDoc(notesCollection, {
      title,
      content,
      date
    });
  }

  const remove = async (note: Note) => {
    await deleteDoc(doc(notesCollection, note.id?.toString()));
  }

  const update = async (note: Note) => {
    await updateDoc(doc(notesCollection, note.id), {
      title: note.title,
      content: note.content,
      date: note.date
    })
  }

  const findById = (id: string) : Note | undefined => {
    return notes.value.filter((x) => {
      return x.id === id
    })[0]
  }

  return {
    notes,
    totalNotesCount,
    totalCharacters,
    isLoading,
    clearNotes,
    create,
    remove,
    findById,
    update,
    init
  }
})
