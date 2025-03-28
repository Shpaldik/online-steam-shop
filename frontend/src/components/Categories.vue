<template>
    <section class="bg-[var(--color-primary)] py-10 px-6">
      <div class="bg-[var(--color-secondary)] p-6 max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-white text-2xl font-semibold">Steam knifes</h2>
          <button class="text-gray-300 bg-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-600">
            See All
          </button>
        </div>
  
      
        <div class="grid grid-cols-4 p-20 gap-6 border-2 border-black ">
          <div v-for="(item, index) in items" :key="index" class="bg-gradient-to-t  from-gray-900 to-transparent p-4 rounded-lg relative group">
            <img :src="item.image" alt="Item Image" class="w-full rounded-md opacity-80 group-hover:opacity-100 transition duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-sm text-gray-400">{{ item.type }}</p>
              <div class="flex items-center mt-1">
                <img src="/coin.svg" class="w-5 h-5" />
                <span class="ml-1">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
  
  <script setup>
  const items = [
    { name: "WILD BEGINNINGS", type: "Game Profile", price: "5,000", image: "" },
    { name: "SPRING SALE 2025 SPACE", type: "Profile Background", price: "1,000", image: "" },
    { name: "SPRING SALE 2025 SPACE", type: "Profile Background", price: "1,000", image: "" },
    { name: "SPRING SALE 2025 SPACE", type: "Profile Background", price: "1,000", image: "" }
  ];
  </script>
  