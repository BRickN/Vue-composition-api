<template>
  <div class="cards-item">
    <div class="card">
      <div class="card-content">
        <div class="card-title">
          <h2>{{ note.id }}: {{ note.title }}</h2>
          <h3>{{ note.date }}</h3>
        </div>
        <p class="card-text">
          {{ props.note.content }}
        </p>
        <div class="button-container">
          <RouterLink :to="{ name: Routes.EditNote, params: { id: note.id } }" class="btn btn-white"
            >Edit</RouterLink
          >
          <button class="btn btn-white" @click.prevent="modalsVisibility.deleteNote = true">
            Delete
          </button>
        </div>
      </div>
    </div>
    <DeleteNoteModal
      v-if="modalsVisibility.deleteNote"
      v-model="modalsVisibility.deleteNote"
      :note="note"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, type PropType } from 'vue'
import type { Note } from '@/types/Note'
import { Routes } from '@/router/routes'
import DeleteNoteModal from './DeleteNoteModal.vue'

/* PROPS */
const props = defineProps({
  note: {
    type: Object as PropType<Note>,
    required: true
  }
})

const modalsVisibility = reactive({
  deleteNote: false
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
  word-wrap: break-word;
}

.card-content {
  width: 100%;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  word-wrap: break-word;
  hyphens: auto;
}
.card-title h3 {
  font-size: small;
  color: var(--vt-c-navy);
}
.card-text {
  padding: 1rem 0;
  word-break: break-all;
  word-wrap: break-word;
  hyphens: auto;
  width: 100%;
}

.button-container {
  display: flex;
  gap: 10px;
}
</style>
