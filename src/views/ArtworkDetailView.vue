<template>
  <div class="artwork-detail py-12" v-if="artwork">
    <div class="max-w-7xl mx-auto px-6 mb-24 flex flex-col lg:flex-row gap-16">
      <!-- Image Gallery -->
      <div class="lg:w-1/2">
        <div class="bg-surface-container rounded-xl overflow-hidden shadow-2xl mb-6">
          <img :src="mainImage" :alt="artwork.title" class="w-full h-full object-cover" />
        </div>
        
        <!-- Thumbnails -->
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          <div 
            v-for="(img, idx) in artwork.images" 
            :key="idx"
            @click="mainImage = img"
            class="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300"
            :class="mainImage === img ? 'border-primary' : 'border-transparent hover:ring-2 hover:ring-primary-container hover:border-transparent'"
          >
            <img :src="img" :alt="`Thumbnail ${Number(idx)+1}`" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <!-- Details -->
      <div class="lg:w-1/2 flex flex-col">
        <div class="">
          <p class="text-sm font-medium tracking-widest text-gray-400 uppercase mb-2">{{ collection?.name || 'Artwork' }}</p>
          <h1 class="text-4xl md:text-5xl font-serif text-primary-dim mb-4 leading-tight">{{ artwork.title }}</h1>
          <p class="text-2xl font-serif text-gray-800">${{ artwork.price.toLocaleString() }}</p>
        </div>

        <div class="flex flex-col gap-4 border-t border-b border-surface-container py-8 mb-8">
          <div class="flex flex-col gap-1">
            <span class="text-xs uppercase tracking-widest text-gray-500">Code</span>
            <span class="text-gray-800">{{ artwork.code }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs uppercase tracking-widest text-gray-500">Medium</span>
            <span class="text-gray-800">{{ artwork.material }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs uppercase tracking-widest text-gray-500">Dimensions</span>
            <span class="text-gray-800">{{ artwork.dimensions }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs uppercase tracking-widest text-gray-500">Year</span>
            <span class="text-gray-800">{{ artwork.year }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs uppercase tracking-widest text-gray-500">Certification</span>
            <span class="text-gray-800">{{ artwork.certification }}</span>
          </div>
        </div>

        <div class="mb-10">
          <p class="text-gray-600 leading-relaxed">{{ artwork.description }}</p>
        </div>

        <div class="flex flex-col gap-4 mt-auto">
          <BaseButton href="https://instagram.com/elenavance" target="_blank" size="full">
            Inquire to Purchase
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Related Artworks -->
    <div class="max-w-7xl mx-auto px-6 pt-16 border-t border-surface-container">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-3xl font-serif text-primary-dim">Related Artworks</h2>
        <router-link to="/gallery" class="text-primary hover:text-primary-dim transition-colors uppercase tracking-widest text-sm font-medium">
          View All
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link 
          v-for="relArt in relatedArtworks" 
          :key="relArt.id" 
          :to="'/artwork/' + relArt.id"
          class="group block relative"
        >
          <div class="aspect-[4/5] overflow-hidden rounded-md bg-surface-container mb-4 shadow-sm relative">
            <img :src="relArt.images[0]" :alt="relArt.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h3 class="font-serif text-lg text-primary-dim group-hover:text-primary transition-colors">{{ relArt.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="min-h-[50vh] flex items-center justify-center">
    <p class="text-xl text-gray-500">Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGalleryStore } from '../stores/gallery'

const route = useRoute()
const store = useGalleryStore()

const artwork = ref<any>(null)
const mainImage = ref('')
const collection = ref<any>(null)

const loadArtwork = () => {
  const id = route.params.id as string
  artwork.value = store.getArtworkById(id)
  if (artwork.value) {
    mainImage.value = artwork.value.images[0]
    collection.value = store.getCollectionById(artwork.value.collectionId)
  }
}

onMounted(() => {
  loadArtwork()
})

watch(() => route.params.id, () => {
  loadArtwork()
})

const relatedArtworks = computed(() => {
  if (!artwork.value) return []
  return store.artworks.filter(a => a.id !== artwork.value.id).slice(0, 3)
})
</script>
