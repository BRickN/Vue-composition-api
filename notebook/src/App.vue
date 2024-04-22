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

const notesStore = useNotesStore()
</script>
