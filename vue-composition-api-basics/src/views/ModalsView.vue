<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalModel from '@/components/ModalModel.vue'

const modalVisible = ref<boolean>(false)
const modalModelVisible = ref<boolean>(false)
const showDarkModal = ref<boolean>(false)
const showModal = () => {
  modalVisible.value = true
}
const showModalModel = () => {
  modalModelVisible.value = true
}
const hideModal = () => {
  modalVisible.value = false
}
</script>
<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <input v-model="showDarkModal" type="checkbox" />
      <p>{{ showDarkModal }}</p>
    </div>
    <button @click.prevent="showModal()">Show modal</button>
    <button @click.prevent="showModalModel()">Show modalModel</button>
    <Modal v-if="modalVisible" @hideModal="hideModal()">
      <template #title>This is a modal</template>
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus, reprehenderit
        beatae et ullam laboriosam necessitatibus dolores! Quibusdam odio ipsam quasi rem ducimus
        sunt optio quos itaque! Quam, quis ipsum!
      </template>
    </Modal>
    <ModalModel v-model="modalModelVisible" :darkMode="showDarkModal">
      <template #title>This is a modalModel</template>
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus, reprehenderit
        beatae et ullam laboriosam necessitatibus dolores! Quibusdam odio ipsam quasi rem ducimus
        sunt optio quos itaque! Quam, quis ipsum!
      </template>
    </ModalModel>
    <!-- <component :is="ModalModel" v-model="modalModelVisible">
      <template #title>This is a modalModel</template>
      <template #text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus, reprehenderit
        beatae et ullam laboriosam necessitatibus dolores! Quibusdam odio ipsam quasi rem ducimus
        sunt optio quos itaque! Quam, quis ipsum!
      </template>
    </component> -->
  </div>
</template>
