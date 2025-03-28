<template>
  <header class="flex items-center justify-between p-4 bg-[var(--color-primary)] shadow-md">
    <img src="/logo.svg" alt="Logo" class="w-44 cursor-pointer" />
    <nav class="flex gap-8 text-white font-bold">
      <router-link v-if="route.path !== '/home'" to="/" class="hover:underline transition-colors">
        Home
      </router-link>
    </nav>
    <div class="flex gap-4 items-center">
      <template v-if="isAuthenticated">
      </template>
      <template v-else>
        <router-link v-if="!isRegisterPage" to="/register">
          <button class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)] hover:bg-blue-500 transition">
            Register
          </button>
        </router-link>
        <router-link v-if="!isLoginPage" to="/login">
          <button class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)] hover:bg-blue-500 transition">
            Login
          </button>
        </router-link>
      </template>
      <template v-if="isAuthenticated">
        <button @click="logout" class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)] hover:bg-blue-500 transition">
          Logout
        </button>
        <router-link v-if="isAdmin" to="/AdminPanel">
          <button class="bg-[var(--color-blue)] px-5 py-2 rounded-xl text-[var(--color-primary)] hover:bg-blue-500 transition">
            Products
          </button>
        </router-link>
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
  authStore.logout()
}

const isAuthenticated = computed(() => !!authStore.token)
const isAdmin = computed(() => authStore.user && authStore.user.role === 'admin')
</script>

