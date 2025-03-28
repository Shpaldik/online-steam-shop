<template>
  <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div class="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 class="text-white text-2xl sm:text-3xl font-bold">Steam Knives</h2>
      </div>

      <div class="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          v-model="searchQuery"
          placeholder="Поиск по названию..."
          class="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <select v-model="sortOrder" class="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-600 focus:scale-105 focus:bg-gray-600">
            <option value="asc">Цена по возрастанию</option>
            <option value="desc">Цена по убыванию</option>
        </select>

      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="item in filteredItems" :key="item.id" class="relative group bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="relative w-full h-48 rounded-md overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 ease-out"></div>
            <div class="absolute bottom-4 left-4 text-white transition-opacity duration-500 ease-out group-hover:opacity-100">
              <h3 class="text-lg font-bold">{{ item.title }}</h3>
              <p class="text-sm text-gray-300">{{ item.body }}</p>
              <div class="flex items-center mt-1">
                <img src="/coin.svg" class="w-5 h-5" />
                <span class="ml-1 text-sm">{{ item.price || '0' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '@/services/axios'

const items = ref([])
const searchQuery = ref("")
const sortOrder = ref("asc")

const fetchItems = async () => {
  try {
    const response = await api.get('http://127.0.0.1:8000/api/posts')
    items.value = response.data.data.data || response.data.data
  } catch (error) {
    console.error('Error fetching items', error)
  }
}

const filteredItems = computed(() => {
  let filtered = items.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
  if (sortOrder.value === "asc") {
    filtered.sort((a, b) => a.price - b.price)
  } else {
    filtered.sort((a, b) => b.price - a.price)
  }
  return filtered
})

onMounted(() => {
  fetchItems()
})
</script>
