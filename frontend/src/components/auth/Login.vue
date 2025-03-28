<template>
    <Header />
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1F2937] to-[#161E26]">
      <div class="bg-[#2A3B4E] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-semibold text-white text-center mb-4">Sign In</h2>
        
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="text-gray-300 block mb-1">Email</label>
            <input type="email" v-model="email" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
          </div>
  
          <div class="mb-6">
            <label class="text-gray-300 block mb-1">Password</label>
            <input type="password" v-model="password" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2]">
          </div>
  
          <button type="submit" class="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-lg transition">
            Login
          </button>
          
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <p class="text-gray-400 text-center mt-4">
          Don't have an account?
          <router-link to="/register" class="text-[#4A90E2] hover:underline">Register</router-link>
        </p>
      </div>
    </div>
</template>
  
<script setup>
  import Header from '../Header.vue';

  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const errorMessage = ref('');
    

    const authStore = useAuthStore()

    const handleLogin = async () => {
      try{
        const res = await authStore.login({
        email: email.value,
        password: password.value
      })

      if (res && res.status === 1) {
        console.log('Logged in!')
        router.push('/home')
      } else {
        console.log('Error login', res)
      }
      }
      catch(error){
        handleError(error)
        
      }
    }

    const handleError = (error) =>{
      if(error.response && error.response.data){
        errorMessage.value = error.response.data.message;
      }else{
        errorMessage.value = 'Something went wrong';
      }
    }

  
</script>
  