<template>
  <header class="flex items-center justify-between p-3 bg-[var(--color-primary)]">
    <img src="/logo.svg" alt="logo" width="200">
    <nav class="flex gap-20 text-white font-bold">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/adminpanel" class="hover:underline">Catalog</router-link>
      <router-link to="/about" class="hover:underline">About</router-link>
    </nav>
    <div class="flex gap-5 items-center">
      <template v-if="isAuthenticated">
        <router-link to="/profile">
          <img class="rounded-full" src="/profile.svg" alt="Profile" width="30">
        </router-link>
      </template>
      <template v-else>
        <router-link v-if="!isRegisterPage" to="/register">
          <button class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)]">Register</button>
        </router-link>
        <router-link v-if="!isLoginPage" to="/login">
          <button class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)]">Login</button>
        </router-link>
      </template>

      <template v-if="isAuthenticated">
        <button @click="logout" class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)]">Logout</button>
      </template>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()

const isLoginPage = computed(() => route.name === 'login')
const isRegisterPage = computed(() => route.name === 'register')


const authStore = useAuthStore()
const logout = () => {
  useAuthStore().logout()
}
const isAuthenticated = computed(() => !!authStore.token)
</script>
