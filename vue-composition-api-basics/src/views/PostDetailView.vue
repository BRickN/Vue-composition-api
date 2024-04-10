<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Routes } from '@/router/Routes'

const route = useRoute()
const router = useRouter()
const showPostId = () => {
  alert(`id of this route is ${route.params.id}`)
}
const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push({
      name: Routes.Home
    })
  }, 3000)
}

const goToPostDetailPage = (postNumber: number) => {
  router.push({
    name: Routes.PostDetail,
    params: {
      id: postNumber
    }
  })
}
</script>

<template>
  <div class="postdetail">
    <h1>Post detail page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }}</p>
    <div>
      <button @click.prevent="showPostId">Show post id</button>
    </div>
    <div>
      <button @click.prevent="goHomeIn3Seconds">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click.prevent="goToPostDetailPage(1)">Go to detail page 1</button>
    </div>
    <RouterLink :to="{ name: Routes.Posts }">Back</RouterLink>
  </div>
</template>
