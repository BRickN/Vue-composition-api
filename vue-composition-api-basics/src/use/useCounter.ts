import { reactive, computed, watch, nextTick } from 'vue'
import { OddOrEven } from '@/types/OddOrEven'


export function useCounter(){
const counterData = reactive({
    count: 0,
    counterTitle: 'myTitle'
  })

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      if (newCount === 20) {
        alert('Nice, you made it to 20')
      }
    }
  )
  const oddOrEven = computed<OddOrEven>(() => {
    return counterData.count % 2 === 0 ? OddOrEven.even : OddOrEven.odd
  })

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

  return{
    counterData,
    oddOrEven,
    increment,
    decrement
  }
}