<template>
  <header class="">
    <NavBar />
  </header>
  <main class="container">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>
