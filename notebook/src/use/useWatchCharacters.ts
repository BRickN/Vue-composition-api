import {watch} from 'vue'
import type { Note } from '@/types/Note'

export function useWatchCharacters(note: Note, characterLimit: number = 100){
    watch(() => note.content, (newValue) => {
        if (newValue.length >= characterLimit) {
            alert(`only ${characterLimit} characters allowed`)
        }
    })
}