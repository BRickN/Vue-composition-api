<template>
  <div id="open-modal" class="modal-window">
    <div ref="modal">
      <a href="#" title="Close" class="modal-close" @click.prevent="closeModal">Close</a>
      <h1>Delete Note?</h1>
      <div>Are you sure you want to delete this note?</div>
      <div class="buttons-container">
        <button class="btn btn-white" @click.prevent="handleDelete">Delete</button>
        <button class="btn btn-white" @click.prevent="closeModal">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { PropType } from 'vue'
import { useNotesStore } from '@/stores/useNotesStore'
import { onClickOutside } from '@vueuse/core'
import type { Note } from '@/types/Note'
const { deleteNote } = useNotesStore()

const modal = ref<HTMLElement | null>(null)

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  note: {
    type: Object as PropType<Note>,
    required: true
  }
})

const emits = defineEmits<{
  'update:modelValue': [value: Boolean]
}>()

onClickOutside(modal, () => {
  closeModal()
})

const closeModal = () => {
  emits('update:modelValue', false)
}

const handleDelete = () => {
  deleteNote(props.note)
}

const handleKeyboard = (event: KeyboardEvent) => {
  console.log('kljdshfsd')
  if (event.key === 'Escape') {
    closeModal()
  }
}
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>

<style scoped>
.modal-window {
  position: fixed;
  background-color: rgba(44, 44, 44, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  pointer-events: auto;
  transition: all 0.3s;
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
  }
}

.modal-window {
  & > div {
    border-radius: 1rem;
  }
}

.buttons-container {
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: flex-end;
  margin-top: 1rem;
}
</style>
