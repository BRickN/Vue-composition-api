import { defineStore } from 'pinia'
import { auth } from '@/includes/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, type UserCredential } from 'firebase/auth'
import type { Credentials } from '@/types/Credentials'
import { ref } from 'vue'
import type{ User} from '@/types/User'
import { useRouter } from 'vue-router'
import { Routes } from '@/router/routes'
import { useNotesStore } from './useNotesStore'

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const notesStore = useNotesStore()

  const user = ref<User | null>(null)
  const isLoading = ref<boolean>(false)

  const init = () => {
    isLoading.value = true
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        user.value = {
          email: firebaseUser.email || '',
          uid: firebaseUser.uid
        }
        router.push({ name: Routes.Notes})
        isLoading.value = false
      } else {
        user.value = null
        notesStore.clearNotes()
        router.replace({name: Routes.Auth})
        isLoading.value = false
      }
    })
  }

  const registerUser = async (credentials: Credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
  }

  const loginUser = async (credentials: Credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
  }

  const logoutUser = async () => {
    signOut(auth)
    .catch((error) => {
      console.log(error.message)
    })
  }

  return {
    user,
    isLoading,
    init,
    registerUser,
    loginUser,
    logoutUser
  }
})
