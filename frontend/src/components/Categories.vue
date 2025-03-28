<template>
  <section class="bg-[var(--color-primary)] py-10 px-6">
    <div class="bg-[var(--color-secondary)] p-6 max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-white text-2xl font-semibold">Steam knifes</h2>
        <button class="text-gray-300 bg-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-600">
          See All
        </button>
      </div>
  
      <div class="grid grid-cols-4 p-20 gap-6 border-2 border-black">
        <div v-for="item in items" :key="item.id" class="bg-gradient-to-t from-gray-900 to-transparent p-4 rounded-lg relative group">
          <img :src="item.image || '/default.png'" alt="Item Image" class="w-full rounded-md opacity-80 group-hover:opacity-100 transition duration-300" />
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="font-semibold">{{ item.title }}</h3>
            <p class="text-sm text-gray-400">{{ item.body }}</p>
            <div class="flex items-center mt-1">
              <img src="/coin.svg" class="w-5 h-5" />
              <span class="ml-1">{{ item.price || '0' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/axios'

const items = ref([])

const fetchItems = async () => {
  try {
    const response = await api.get('http://127.0.0.1:8000/api/posts')
    items.value = response.data.data.data || response.data.data
  } catch (error) {
    console.error('Error fetching items', error)
  }
}

onMounted(() => {
  fetchItems()
})
</script>
