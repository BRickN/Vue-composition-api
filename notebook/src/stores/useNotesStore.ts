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
  setDoc,
  updateDoc, } from 'firebase/firestore';
import type { DocumentData,  Unsubscribe } from 'firebase/firestore';
import { db } from '@/includes/firebase'
import type { Note } from '@/types/Note'
import type { Timestamp } from 'firebase/firestore/lite';

const notesCollection: CollectionReference<DocumentData, DocumentData> = collection(db, 'notes');
let queryNotesCollection: Query;
let notesSnapshotUnsubscribe: Unsubscribe | null = null;

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref<Note[]>([])

  /* COMPUTED */
  const totalNotesCount = computed<number>(() => {
    return notes.value.length
  })
  const totalCharacters = computed<number>(() => {
    return notes.value.reduce((total, note) => {
      return total + note.content.length
    }, 0)
  })
  const newNoteId = computed<number>(() => {
    return totalNotesCount.value + 1
  })

  /* FUNCTIONS */
  const init = () => {
    // notesCollection = collection(db, 'notes');
    queryNotesCollection = query(notesCollection, orderBy('date'))
    fetch();
  }

  const fetch = () => {
    if(notesSnapshotUnsubscribe){
      notesSnapshotUnsubscribe()
    }
    notesSnapshotUnsubscribe = onSnapshot(queryNotesCollection, (querySnapshot) => {
      notes.value = [];
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
    })
  }

  const create = async (note: Note) => {
    const { title, content, date } = note;
    const id = newNoteId.value.toString()
    await setDoc(doc(notesCollection, id), {
      title,
      content,
      date
    });
  }

  const remove = async (note: Note) => {
    await deleteDoc(doc(notesCollection, note.id?.toString()));
  }

  const update = async (note: Note) => {
    await updateDoc(doc(notesCollection, note.id?.toString()), {
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
    create,
    remove,
    findById,
    update,
    init
  }
})
