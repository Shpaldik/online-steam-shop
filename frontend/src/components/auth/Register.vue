<template>
  <Header />
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1F2937] to-[#161E26]">
    <div class="bg-[#2A3B4E] p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold text-white text-center mb-4">Create an Account</h2>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="text-gray-300 block mb-1">Username</label>
          <input type="text" v-model="name" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
        </div>

        <div class="mb-4">
          <label class="text-gray-300 block mb-1">Email</label>
          <input type="email" v-model="email" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
        </div>

        <div class="mb-6">
          <label class="text-gray-300 block mb-1">Password</label>
          <input type="password" v-model="password" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
        </div>

        <button type="submit" class="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-lg transition">
          Register
        </button>
      </form>

      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <p class="text-gray-400 text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-[#4A90E2] hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router';
import Header from '../Header.vue';

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const authStore = useAuthStore()
const route = useRouter()

const handleRegister = async () => {
  errorMessage.value = ''

  if (!name.value || !email.value || !password.value) {
    errorMessage.value = 'All fields are required'
    return
  }

  if (password.value.length < 5) {
    errorMessage.value = 'Password must be at least 5 characters long'
    return
  }

  try {
    const res = await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value
    })

    if (res && res.status === 1) {
      route.push('/login')
    } else if (res && res.status === 0) {
      errorMessage.value = 'User already exists'
    } else {
      errorMessage.value = 'Registration failed'
    }
  } catch (error) {
    errorMessage.value = 'An error occurred during registration'
  }
}
</script>
