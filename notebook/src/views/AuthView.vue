<template>
  <h1>Auth page</h1>
  <div class="tabs">
    <ul>
      <li :class="{ active: !register }" @click="register = false">Login</li>
      <li :class="{ active: register }" @click="register = true">Register</li>
    </ul>
  </div>
  <div class="auth-form">
    <div class="cards-item">
      <div class="card">
        <div class="card-content">
          <div class="card-title">
            <h2>{{ formTitle }}</h2>
          </div>
          <form class="auth-form" @submit.prevent="onSubmit">
            <div class="field padding-bottom--24">
              <label for="email">Email</label>
              <input type="email" name="email" v-model="credentials.email" />
            </div>
            <div class="field padding-bottom--24">
              <label for="password">Password</label>
              <input type="password" name="password" v-model="credentials.password" />
            </div>

            <div class="field">
              <button class="submit-button" type="submit" name="submit">{{ formTitle }}</button>
            </div>
          </form>
          <div class="button-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import type { Credentials } from '@/types/Credentials'
const register = ref<boolean>(false)
const formTitle = computed(() => {
  return register.value ? 'Register' : 'Login'
})

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter an email and password')
    return
  }
  register.value ? registerUser() : loginUser()
}

const registerUser = () => {
  console.log('reg')
}

const loginUser = () => {
  console.log('log')
}

const credentials = reactive<Credentials>({
  email: '',
  password: ''
})
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--vt-c-navy);
  width: 80vw;
  margin: auto;
}

.tabs ul {
  display: flex;
}

.tabs li {
  margin: 5px 20px;
  padding: 10px 20px;
  border-bottom: 3px solid transparent;
  transition: border-color 0.2s ease-in-out;
  cursor: pointer;
}

.tabs li:hover:not(.active) {
  border-color: var(--vt-c-blue);
}

.tabs li.active {
  border-color: var(--vt-c-mint);
}

.auth-form {
  max-width: 400px;
  margin: 20px auto;
}

.cards-item {
  background-color: var(--vt-c-white-text);
  border: 1px solid #cccccc;
  padding: 1rem;
  margin: 1rem 0 0 0;
}

.card {
  display: flex;
  word-wrap: break-word;
}

.card-content {
  width: 100%;
}

.card-title {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  word-wrap: break-word;
  hyphens: auto;
}
.card-title h3 {
  font-size: small;
  color: var(--vt-c-navy);
}

.button-container {
  display: flex;
  gap: 10px;
}

a {
  color: #5469d4;
  text-decoration: unset;
}

.padding-bottom--24 {
  padding-bottom: 24px;
}

label {
  margin-bottom: 10px;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

.submit-button {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(84, 105, 212);
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
    rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}
a.ssolink {
  display: block;
  text-align: center;
  font-weight: 600;
}
.footer-link span {
  font-size: 14px;
  text-align: center;
}
.listing a {
  color: #697386;
  font-weight: 600;
  margin: 0 10px;
}
</style>
