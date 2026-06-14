<template>
  <div class="gallery py-12">
    <div class="container mx-auto px-6 mb-12 flex justify-between items-end">
      <h1 class="text-4xl md:text-5xl font-serif text-primary-dim">Gallery</h1>
      <router-link to="/commission" class="hidden md:inline-block px-6 py-2 border border-primary text-primary rounded hover:bg-surface-container transition-colors uppercase tracking-widest text-sm">
        Commission
      </router-link>
    </div>

    <!-- Artwork Grid -->
    <div class="container mx-auto px-6 mb-24">
      <template v-if="store.loading">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <div v-for="n in 6" :key="n" class="animate-pulse flex flex-col">
            <div class="aspect-[3/4] round bg-surface-container-high mb-4 shadow-sm"></div>
            <div class="flex flex-col gap-2 px-1">
              <div class="h-6 bg-surface-container-high rounded w-3/4"></div>
              <div class="flex gap-2 mt-1">
                <div class="h-4 bg-surface-container-high rounded w-12"></div>
                <div class="h-4 bg-surface-container-high rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <router-link 
            v-for="art in store.artworks" 
            :key="art.id" 
            :to="'/artwork/' + art.id"
            class="group block cursor-pointer"
          >
            <!-- Image container with hover effects -->
          <div class="aspect-[3/4] overflow-hidden round bg-surface-container mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
              <img 
                :src="art.images[0]" 
                :alt="art.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </div>
            
            <!-- Text details -->
            <div class="flex flex-col gap-1 px-1">
              <h3 class="font-serif text-xl text-primary-dim group-hover:text-primary transition-colors">{{ art.title }}</h3>
              <div class="flex flex-wrap gap-2 mt-1">
                <span v-for="tag in art.tags.slice(0, 3)" :key="tag" class="text-[10px] px-2 py-0.5 rounded-full bg-surface-container-high text-outline uppercase tracking-wider">
                  {{ tag }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGalleryStore } from '~/stores/gallery'

const store = useGalleryStore()
</script>
