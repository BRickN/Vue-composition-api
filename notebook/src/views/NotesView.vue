<template>
  <div class="notes">
    <h1>Notes</h1>
    <NoteForm />
    <NoteCard />
  </div>
</template>
<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'
import NoteForm from '@/components/NoteForm.vue'
</script>
