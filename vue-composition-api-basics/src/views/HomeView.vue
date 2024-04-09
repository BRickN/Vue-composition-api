<script setup lang="ts">
import { ref, reactive } from 'vue'
interface CounterData {
  count: number
  counterTitle: string
}
const count = ref<number>(0)
const counterTitle = ref<string>('My counter')

const counterData: CounterData = reactive({
  count: 0,
  counterTitle: 'myTitle'
})

const increment = () => {
  counterData.count++
}
const decrement = () => {
  counterData.count--
}
</script>

<template>
  <div class="home">
    <h3>{{ counterData.counterTitle }}</h3>
    <div>
      <button class="btn" @click.prevent="decrement">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click.prevent="increment">+</button>
    </div>
    <div>
      <h4>Edit</h4>
      <input type="text" v-model="counterData.counterTitle" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
}
</style>
