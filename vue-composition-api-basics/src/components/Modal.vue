<script setup lang="ts">
/*
    emits
*/
defineEmits<{
  hideModal: []
}>()
</script>

<script lang="ts">
export default {
  name: 'ModalItem'
}
</script>

<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title"></slot></h1>
      <p><slot name="text"></slot></p>
      <button @click.prevent="$emit('hideModal')">hide modal</button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  background: gray;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
