<template>
  <div class="cards-item">
    <div class="card">
      <div class="card-content">
        <div class="card-title"><h2>Flex</h2></div>
        <p class="card-text">
          {{ props.note.content }}
        </p>
        <div class="button-container">
          <button class="btn btn-white">Edit</button>
          <button class="btn btn-white">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Note } from '@/types/Note'

const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true
  }
})
</script>

<style scoped>
.cards-item {
  background-color: var(--vt-c-white-text);
  border: 1px solid #cccccc;
  padding: 1rem;
  margin: 1rem 0 0 0;
}

.card {
  display: flex;
}

.card-title {
  border-bottom: 1px solid #cccccc;
}

.card-text {
  padding: 1rem 0;
}

.button-container {
  display: flex;
  gap: 10px;
}
</style>
