import {  computed, reactive, nextTick } from 'vue'
import { defineStore } from 'pinia'
import { OddOrEven } from '@/types/OddOrEven'

export const useCounterStore = defineStore('counter', () => {
  const counterData = reactive({
    count: 1,
    counterTitle: 'myTitle'
  }
)
  const increment = async (amount: number, event?: Event) => {
    if (event) {
      console.log(event)
    }
    counterData.count += amount
    await nextTick()
    console.log('counter updated')
  }

  const decrement = (amount: number, event?: Event) => {
    if (event) {
      console.log(event)
    }
    counterData.count -= amount
  }

  const oddOrEven = computed<OddOrEven>(() => {
    return counterData.count % 2 === 0 ? OddOrEven.even : OddOrEven.odd
  })

  return { counterData, oddOrEven, increment, decrement }
})
