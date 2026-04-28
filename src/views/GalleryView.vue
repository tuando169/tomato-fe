<template>
  <div class="gallery py-12">
    <div class="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
      <h1 class="text-4xl md:text-5xl font-serif text-primary-dim">Phòng trưng bày</h1>
      <router-link to="/commission" class="hidden md:inline-block px-6 py-2 border border-primary text-primary rounded hover:bg-surface-container transition-colors uppercase tracking-widest text-sm">
        Đặt vẽ
      </router-link>
    </div>

    <!-- Artwork Grid -->
    <div class="max-w-7xl mx-auto px-6 mb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <router-link 
          v-for="art in store.artworks" 
          :key="art.id" 
          :to="'/artwork/' + art.id"
          class="group block cursor-pointer"
        >
          <!-- Image container with hover effects -->
          <div class="aspect-[3/4] overflow-hidden rounded-md bg-surface-container mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-2">
            <img 
              :src="art.images[0]" 
              :alt="art.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy" 
            />
          </div>
          
          <!-- Text details -->
          <div class="flex flex-col gap-1 px-1">
            <div class="flex justify-between items-start">
              <h3 class="font-serif text-xl text-primary-dim group-hover:text-primary transition-colors">{{ art.title }}</h3>
              <span class="text-sm text-gray-400 font-serif">{{ art.year }}</span>
            </div>
            <p class="text-sm text-gray-500">{{ art.material }}</p>
            <p class="text-sm text-gray-400 mt-1">{{ art.dimensions }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGalleryStore } from '../stores/gallery'

const store = useGalleryStore()
</script>
