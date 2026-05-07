<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-12 gap-12">
      <div class="md:w-1/2 flex flex-col items-start gap-8 z-10">
        <h1 class="text-5xl md:text-7xl font-serif leading-tight text-primary-dim">
          The Art<br>of<br>Stillness
        </h1>
        <p class="text-lg text-gray-600 max-w-md leading-relaxed">
          {{ store.artist.philosophy }}
        </p>
        <div class="flex items-center gap-6 mt-4">
          <BaseButton to="/gallery">
            View Collections
          </BaseButton>
          <router-link to="/about" class="text-primary hover:border-primary border-b border-transparent pb-1 transition-all uppercase tracking-widest text-sm">
            About the Artist
          </router-link>
        </div>
      </div>
      <div class="md:w-1/2 w-full relative">
        <div class=" bg-surface-container rounded-lg overflow-hidden shadow-2xl relative z-10">
          <img v-if="featuredArtwork" :src="featuredArtwork.images[0]" :alt="featuredArtwork.title" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <!-- Decorative elements -->
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-mint/30 rounded-full blur-3xl z-0"></div>
        <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl z-0"></div>
      </div>
    </section>

    <!-- Featured Artworks -->
    <section class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-end mb-6">
          <h2 class="text-3xl font-serif text-primary-dim">Featured Artworks</h2>
          <router-link to="/gallery" class="group flex items-center gap-2 text-primary hover:text-primary-dim transition-colors uppercase tracking-widest text-sm font-medium">
            View Gallery
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <router-link v-for="art in store.highlightedArtworks" :key="art.id" :to="'/artwork/' + art.id" class="group block">
            <div class="aspect-[3/4] overflow-hidden rounded-md bg-surface-container mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <img :src="art.images[0]" :alt="art.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="font-serif text-xl group-hover:text-primary transition-colors">{{ art.title }}</h3>
              <div class="flex flex-wrap gap-1">
                <span v-for="tag in art.tags.slice(0, 2)" :key="tag" class="text-[10px] text-gray-500 uppercase tracking-widest">
                  {{ tag }}{{ art.tags.indexOf(tag) < 1 && art.tags.length > 1 ? ' •' : '' }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Request Commission Section -->
    <section class="py-24 bg-surface-container relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-seafoam/40 z-0"></div>
      <div class="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <h2 class="text-4xl font-serif text-primary-dim mb-6">Request a Commission</h2>
        <p class="text-gray-600 mb-10 max-w-xl mx-auto">Each piece is a unique story. Share your vision and let's bring it to life.</p>
        
        <div class="flex justify-center">
          <BaseButton to="/commission" size="lg">
            <span class="material-symbols-outlined">chat_bubble</span>
           Commission
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGalleryStore } from '~/stores/gallery'

const store = useGalleryStore()
const featuredArtwork = computed(() => store.highlightedArtworks[0])
</script>
