import { defineStore } from 'pinia'
import { auth } from '@/includes/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, type UserCredential } from 'firebase/auth'
import type { Credentials } from '@/types/Credentials'
import { ref } from 'vue'
import type{ User} from '@/types/User'
import { useRouter } from 'vue-router'
import { Routes } from '@/router/routes'

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();

  const user = ref<User | null>(null)

  const init = () => {
    onAuthStateChanged(auth, (fbUser) => {
      if(fbUser) {
        user.value = {
          email: fbUser.email || '',
          uid: fbUser.uid
        }
        router.push({ name: Routes.Notes})
      } else {
        user.value = null
        router.replace({name: Routes.Auth})
      }
    })
  }

  const registerUser = async (credentials: Credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then()
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
  }

  const loginUser = async (credentials: Credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then()
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
  }

  const logoutUser = async () => {
    signOut(auth)
    .then()
    .catch((error) => {
      console.log(error.message)
    })
  }

  return {
    user,
    init,
    registerUser,
    loginUser,
    logoutUser
  }
})
