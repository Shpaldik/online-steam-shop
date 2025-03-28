<template>
    <div class="min-h-screen bg-gradient-to-b from-[#1F2937] to-[#161E26] p-8">
      <h1 class="text-3xl font-bold text-white text-center mb-8">Admin Panel</h1>
      
      <div class="bg-[#2A3B4E] p-6 rounded-lg shadow-lg mb-8">
        <h2 class="text-xl font-semibold text-white mb-4">Add New Product</h2>
        <form @submit.prevent="addProduct" class="grid grid-cols-1 gap-4">
          <input
            v-model="newProduct.name"
            type="text"
            placeholder="Product Name"
            class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            v-model="newProduct.price"
            type="number"
            placeholder="Price"
            class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            v-model="newProduct.description"
            placeholder="Description"
            class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          ></textarea>
          <button type="submit" class="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold py-2 rounded-lg transition">
            Add Product
          </button>
        </form>
      </div>
      

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-[#2A3B4E] p-4 rounded-lg shadow-lg relative"
        >
          <h3 class="text-xl font-bold text-white mb-2">{{ product.name }}</h3>
          <p class="text-gray-300 mb-2">{{ product.description }}</p>
          <p class="text-white font-semibold mb-4">$ {{ product.price }}</p>
          <div class="flex justify-end gap-2">
            <button @click="editProduct(product)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button @click="deleteProduct(product.id)" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
      
      <div
        v-if="isEditing"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-[#2A3B4E] p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 class="text-xl font-semibold text-white mb-4">Edit Product</h2>
          <form @submit.prevent="updateProduct" class="grid grid-cols-1 gap-4">
            <input
              v-model="editedProduct.name"
              type="text"
              placeholder="Product Name"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <input
              v-model="editedProduct.price"
              type="number"
              placeholder="Price"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              v-model="editedProduct.description"
              placeholder="Description"
              class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            ></textarea>
            <div class="flex justify-end gap-2">
              <button type="button" @click="cancelEdit" class="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded">
                Cancel
              </button>
              <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  
  const products = ref([])
  

  const newProduct = ref({
    name: '',
    price: '',
    description: ''
  })
  
  const isEditing = ref(false)
  const editedProduct = ref({})
  
  const addProduct = () => {
    const product = {
      id: Date.now(),
      name: newProduct.value.name,
      price: newProduct.value.price,
      description: newProduct.value.description,
    }
    products.value.push(product)
    newProduct.value = { name: '', price: '', description: '' }
  }

  const deleteProduct = (id) => {
    products.value = products.value.filter((p) => p.id !== id)
  }
  
  const editProduct = (product) => {
    isEditing.value = true
    editedProduct.value = { ...product }
  }
  
  const cancelEdit = () => {
    isEditing.value = false
    editedProduct.value = {}
  }
  
  const updateProduct = () => {
    const index = products.value.findIndex(p => p.id === editedProduct.value.id)
    if (index !== -1) {
      products.value[index] = { ...editedProduct.value }
    }
    isEditing.value = false
    editedProduct.value = {}
  }
  </script>
  