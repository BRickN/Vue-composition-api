<template>
  <header class="">
    <NavBar />
  </header>
  <main class="container">
    <Loader v-if="notesStore.isLoading" />
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue'
import NavBar from './components/NavBar.vue'
import { useNotesStore } from '@/stores/useNotesStore'
import { useAuthStore } from './stores/useAuthStore'
import { onMounted } from 'vue'

const notesStore = useNotesStore()
const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})
</script>
