<template>
  <Header />
  <div class="min-h-screen bg-gradient-to-b from-[#1F2937] to-[#161E26] p-8">
    <h1 class="text-3xl font-bold text-white text-center mb-8">Admin Panel</h1>
    
    <div class="bg-[#2A3B4E] p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-xl font-semibold text-white mb-4">Add New Product</h2>
      <form @submit.prevent="addProduct" class="grid grid-cols-1 gap-4" enctype="multipart/form-data">
        <input v-model="newProduct.title" type="text" placeholder="Product Name" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
        <textarea v-model="newProduct.body" placeholder="Description" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"></textarea>
        <input v-model="newProduct.price" type="number" placeholder="Price" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
        <input @change="handleImageUpload" type="file" class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
        <button type="submit" class="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-lg transition">
          Add Product
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import { ref, onMounted } from 'vue'
import api from '@/services/axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

if (authStore.role !== 'admin') {
  router.push('/home')
}

const products = ref([])
const newProduct = ref({
  title: '',
  body: '',
  price: '',
  image: null
})

const handleImageUpload = (event) => {
  newProduct.value.image = event.target.files[0]
}

const addProduct = async () => {
  try {
    const formData = new FormData()
    formData.append('title', newProduct.value.title)
    formData.append('body', newProduct.value.body)
    formData.append('price', newProduct.value.price)
    formData.append('image', newProduct.value.image)

    const response = await api.post('/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    
    products.value.push(response.data.data)
    newProduct.value = { title: '', body: '', price: '', image: null }
  } catch (error) {
    console.error('Error adding product', error)
  }
}

onMounted(() => {
  fetchProducts()
})

const fetchProducts = async () => {
  try {
    const response = await api.get('/posts')
    products.value = response.data.data.data
  } catch (error) {
    console.error('Error fetching products', error)
  }
}
</script>
