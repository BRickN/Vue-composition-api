<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Routes } from '@/router/Routes'
import { useCounter } from '@/use/useCounter'
import { OddOrEven } from '@/types/OddOrEven'
/*
  Counter
*/
const { counterData, increment, oddOrEven } = useCounter()
/*
  Posts
*/
const posts = ref<{ id: number; title: string }[]>([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  },
  {
    id: 3,
    title: 'Post 3'
  }
])
</script>

<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: Routes.PostDetail, params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
    <div>
      <button @click.prevent="increment(1)" :class="oddOrEven === OddOrEven.even ? 'even' : 'odd'">
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<style>
.even {
  background-color: red;
}
.odd {
  background-color: yellow;
}
</style>
