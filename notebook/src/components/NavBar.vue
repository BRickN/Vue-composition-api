<template>
  <nav class="main-nav" ref="navbarMenuRef">
    <div class="max-width-container">
      <div class="navbar-brand">
        <RouterLink :to="{ name: Routes.Notes }">
          <img src="@/assets/logo.jpg" alt="My Portfolio Logo" class="logo" />
        </RouterLink>
        <div class="hamburger-container">
          <input type="checkbox" class="toggler" v-model="hamburgerActive" />
          <div class="hamburger">
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <ul class="nav-items" :class="{ 'is-active': hamburgerActive }">
          <li>
            <RouterLink :to="{ name: Routes.Notes }" @click.prevent="hamburgerActive = false"
              >Notes</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: Routes.Stats }" @click.prevent="hamburgerActive = false"
              >Stats</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Routes } from '@/router/routes'
import { onClickOutside } from '@vueuse/core'

const navbarMenuRef = ref<HTMLElement | null>(null)
const hamburgerActive = ref<boolean>(false)

onClickOutside(navbarMenuRef, () => {
  hamburgerActive.value = false
})
</script>

<style scoped>
/* Logo */
.logo {
  width: 65px;
  height: 65px;
  margin: 8px 0px;
  margin-left: 10px;
  border-radius: 25px;
}

/* NavBar */
.main-nav {
  background-color: var(--vt-c-navy);
}
.max-width-container {
  max-width: 1280px;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand a {
  line-height: 0;
}
.nav-items {
  display: flex;
}
.nav-items li {
  padding: 1rem 1.5rem;
}
.nav-items a {
  text-transform: uppercase;
  color: var(--vt-c-white-soft);
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.2s ease-in-out;
}
.nav-items a:hover:not(.router-link-active) {
  border-color: var(--vt-c-blue);
}
.nav-items .router-link-active {
  border-color: var(--vt-c-mint);
}

/* Hamburger */
.hamburger-container {
  display: none;
}

.toggler {
  opacity: 0;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: purple;
}

.hamburger {
  position: absolute;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

/* Hamburger Line */
.hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background-color: var(--vt-c-white-soft);
  transition: var(--primary-transition);
}

/* Hamburger Lines top & bottom */
.hamburger > div::before,
.hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

/* Moves after line down */
.hamburger > div::after {
  top: 10px;
}

/* Toggler Animation checked */
.toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turns lines into X */
.toggler:checked + .hamburger > div::before,
.toggler:checked + .hamburger > div::after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate on hover when checked*/
.toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

@media (max-width: 500px) {
  .max-width-container {
    display: block;
  }
  .hamburger-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    margin: 0 1.5rem;
    width: 50px;
    height: 50px;
  }
  .nav-items {
    display: none;
  }
  .nav-items.is-active {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
  }
}
</style>
