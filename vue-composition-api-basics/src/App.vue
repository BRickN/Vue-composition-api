<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Routes } from '@/router/Routes'
import { reactive, provide } from 'vue'
import type { User } from './types/User'

const user = reactive<User>({
  name: 'Rick',
  age: 21
})

provide('user', user)
</script>

<template>
  <div class="user-data">
    {{ user.name }}
  </div>
  <nav>
    <RouterLink :to="{ name: Routes.Home }" class="nav-item">Home</RouterLink>
    <RouterLink :to="{ name: Routes.Posts }" class="nav-item">Posts</RouterLink>
    <RouterLink :to="{ name: Routes.Modals }" class="nav-item">Modals</RouterLink>
  </nav>
  <RouterView :userData="user" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
