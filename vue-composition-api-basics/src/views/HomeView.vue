<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

const { counterData, oddOrEven, increment, decrement } = useCounter()

/*
  Title
*/
const appTitleRef = ref<HTMLHeadingElement | null>(null)
onMounted(() => {
  console.log(`the app title is: ${appTitleRef.value?.offsetWidth} pixels wide`)
})
</script>

<template>
  <div class="home">
    <h2 ref="appTitleRef">My app title</h2>
    <h3>{{ counterData.counterTitle }}</h3>
    <div class="click-container">
      <button class="btn" @click.prevent="decrement(2, $event)">--</button>
      <button class="btn" @click.prevent="decrement(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click.prevent="increment(1)">+</button>
      <button class="btn" @click.prevent="increment(2)">++</button>
    </div>
    <p>This number is {{ oddOrEven }}</p>
    <div>
      <h4>Edit counter title</h4>
      <input type="text" v-model="counterData.counterTitle" v-Autofocus />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
}
.click-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
.btn {
  font-size: 40px;
}
.counter {
  font-size: 40px;
}
</style>
