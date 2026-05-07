<template>
  <div class="max-w-7xl mx-auto bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
    <!-- Main Content Canvas -->
    <main class="min-h-screen bg-surface py-6">
      <!-- Header Section -->
      <header class="flex justify-between items-end mb-6">
        <div class="space-y-2">
          <span class="label-md uppercase tracking-[0.1rem] text-primary font-bold text-xs">Management</span>
          <h2 class="font-serif text-5xl text-on-surface tracking-tight">Inventory</h2>
        </div>
        <div class="flex gap-4">
          <div class="relative">
            <input v-model="searchQuery" class="bg-surface-container-highest border-none rounded-sm px-6 py-3 w-64 text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search inventory..." type="text"/>
            <span class="material-symbols-outlined absolute right-4 top-3 text-outline text-sm">search</span>
          </div>
        </div>
      </header>

      <!-- Stats Grid (Subtle Tonal Depth) -->
      <section class="grid grid-cols-3 gap-6 mb-6">
        <div class="bg-surface-container-low px-8 py-4 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">TOTAL ARTWORKS</span>
          <span class="font-serif text-3xl">{{ galleryStore.artworks.length }}</span>
        </div>
        <div class="bg-surface-container px-8 py-4 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">HIGHLIGHTED</span>
          <span class="font-serif text-3xl text-primary">{{ galleryStore.highlightedArtworks.length }}</span>
        </div>
        <div class="bg-surface-container-high px-8 py-4 rounded-xl flex flex-col gap-2 border-primary/20">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-primary">UNIQUE TAGS</span>
          <span class="font-serif text-3xl">{{ galleryStore.allTags.length }}</span>
        </div>
      </section>

      <!-- Inventory Grid (Card Form) -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AdminInventoryCard
          v-for="artwork in sortedArtworks"
          :key="artwork.id"
          :artwork="artwork"
          @edit="openEditModal(artwork)"
          @delete="openDeleteModal(artwork)"
          @download="handleDownload(artwork, $event)"
          @toggle-highlight="galleryStore.toggleHighlight(artwork.id, $event)"
        />
      </section>

      <!-- Modals -->
      <AdminEditModal
        :is-open="isEditModalOpen" 
        :artwork="selectedArtwork" 
        @close="isEditModalOpen = false"
        @save="handleEditSave"
      />

      <AdminDeleteModal
        :is-open="isDeleteModalOpen"
        :artwork="selectedArtwork"
        @cancel="isDeleteModalOpen = false"
        @confirm="handleDeleteConfirm"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useGalleryStore } from '~/stores/gallery'
import { computed, ref } from 'vue'
import AdminInventoryCard from './components/AdminInventoryCard.vue'
import type { Artwork } from '~/types'
import AdminDeleteModal from './popups/AdminDeleteModal.vue'
import AdminEditModal from './popups/AdminEditModal.vue'

definePageMeta({
  middleware: 'auth'
})

const galleryStore = useGalleryStore()

const searchQuery = ref('')

const isEditModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedArtwork = ref<any>(null)

const openEditModal = (artwork: any) => {
  selectedArtwork.value = { ...artwork }
  isEditModalOpen.value = true
}

const openDeleteModal = (artwork: any) => {
  selectedArtwork.value = artwork
  isDeleteModalOpen.value = true
}

const handleEditSave = (data: any) => {
  if (selectedArtwork.value) {
    galleryStore.updateArtwork(selectedArtwork.value.id, data)
    isEditModalOpen.value = false
  }
}

const handleDownload = async (artwork: any, imageUrl: string) => {
  if (!imageUrl) return

  try {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    
    // Format filename: artwork-title-image.jpg
    const filename = `${artwork.title.toLowerCase().replace(/\s+/g, '-')}-image.jpg`
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Failed to download image:', error)
    // Fallback for CORS issues: open in new tab
    window.open(imageUrl, '_blank')
  }
}

const handleDeleteConfirm = () => {
  if (selectedArtwork.value) {
    galleryStore.deleteArtwork(selectedArtwork.value.id)
    isDeleteModalOpen.value = false
  }
}

const removeDiacritics = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

const sortedArtworks = computed(() => {
  if (!searchQuery.value) return galleryStore.artworks
  
  const query = removeDiacritics(searchQuery.value.toLowerCase())
  return galleryStore.artworks.filter((artwork:Artwork) => 
    removeDiacritics(artwork.title.toLowerCase()).includes(query) || 
    removeDiacritics(artwork.description.toLowerCase()).includes(query) ||
    artwork.tags.some(tag => removeDiacritics(tag.toLowerCase()).includes(query))
  )
})
</script>
