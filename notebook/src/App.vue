<template>
  <header class="">
    <NavBar />
  </header>
  <main class="container">
    <Loader v-if="notesStore.isLoading || authStore.isLoading" />
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue'
import NavBar from './components/NavBar.vue'
import { useNotesStore } from '@/stores/useNotesStore'
import { useAuthStore } from './stores/useAuthStore'
import { onBeforeMount } from 'vue'

const notesStore = useNotesStore()
const authStore = useAuthStore()

onBeforeMount(async () => {
  await authStore.init()
})
</script>
