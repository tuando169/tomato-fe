<template>
  <div class="max-w-7xl mx-auto bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
    <!-- Main Content Canvas -->
    <main class="min-h-screen bg-surface py-6">
      <!-- Header Section -->
      <header class="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-6">
        <div class="flex gap-5 items-center">
          <h2 class="font-serif text-5xl text-on-surface tracking-tight">Inventory</h2>
          <div class="flex items-center bg-surface-container-low  rounded border border-surface-container h-full">
            <button 
              @click="setViewMode('card')" 
              :class="[
                'py-2 px-4 rounded transition-all flex items-center justify-center', 
                viewMode === 'card' ? 'bg-primary text-white shadow-sm' : 'text-outline hover:text-on-surface'
              ]"
              title="Card View"
            >
              <span class="material-symbols-outlined text-lg">grid_view</span>
            </button>
            <button 
              @click="setViewMode('table')" 
              :class="[
                'py-2 px-4 rounded transition-all flex items-center justify-center', 
                viewMode === 'table' ? 'bg-primary text-white shadow-sm' : 'text-outline hover:text-on-surface'
              ]"
              title="Table View"
            >
              <span class="material-symbols-outlined text-lg">table_rows</span>
            </button>
          </div>          
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <!-- Search -->
          <div class="relative flex-grow sm:flex-grow-0">
            <input v-model="searchQuery" class="bg-surface-container-highest border-none round px-6 py-3 w-64 text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search inventory..." type="text"/>
            <span class="material-symbols-outlined absolute right-4 top-3 text-outline text-sm">search</span>
          </div>

          <!-- View Toggle Switcher -->
          

          <!-- Create Button -->
          <BaseButton @click="openCreateModal" size="sm" class="h-10 !px-4">
            <span class="material-symbols-outlined text-sm">add</span>
            Create
          </BaseButton>
        </div>
      </header>

      <!-- Stats Grid (Subtle Tonal Depth) -->
      <section class="grid grid-cols-4 gap-6 mb-6">
        <div class="bg-surface-container-low px-8 py-4 round flex flex-col gap-2" :class="{ 'animate-pulse': galleryStore.loading }">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">TOTAL ARTWORKS</span>
          <div v-if="galleryStore.loading" class="h-9 bg-surface-container-high rounded w-16"></div>
          <span v-else class="font-serif text-3xl">{{ galleryStore.artworks.length }}</span>
        </div>
        <div class="bg-surface-container px-8 py-4 round flex flex-col gap-2" :class="{ 'animate-pulse': galleryStore.loading }">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">HIGHLIGHTED</span>
          <div v-if="galleryStore.loading" class="h-9 bg-surface-container-high rounded w-16"></div>
          <span v-else class="font-serif text-3xl text-primary">{{ galleryStore.highlightedArtworks.length }}</span>
        </div>
        <div class="bg-surface-container-high px-8 py-4 round flex flex-col gap-2 border-primary/20" :class="{ 'animate-pulse': galleryStore.loading }">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-primary">UNIQUE TAGS</span>
          <div v-if="galleryStore.loading" class="h-9 bg-surface-container-high rounded w-16"></div>
          <span v-else class="font-serif text-3xl">{{ galleryStore.allTags.length }}</span>
        </div>
      </section>

      <!-- Inventory Display -->
      <template v-if="galleryStore.loading">
        <!-- Skeleton Loading for Card View -->
        <section v-if="viewMode === 'card'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="n in 8" :key="n" class="bg-surface-container-lowest round overflow-hidden border border-surface-container animate-pulse flex flex-col">
            <div class="aspect-square bg-surface-container-high"></div>
            <div class="p-6 flex flex-col flex-grow gap-4">
              <div class="space-y-2">
                <div class="h-6 bg-surface-container-high rounded w-3/4"></div>
                <div class="space-y-1">
                  <div class="h-3 bg-surface-container-high rounded w-full"></div>
                  <div class="h-3 bg-surface-container-high rounded w-5/6"></div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-surface-container">
                <div class="h-4 bg-surface-container-high rounded w-12"></div>
                <div class="h-4 bg-surface-container-high rounded w-16"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skeleton Loading for Table View -->
        <section v-else-if="viewMode === 'table'" class="overflow-x-auto round border border-surface-container bg-surface-container-lowest shadow-sm animate-pulse">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-surface-container bg-surface-container-low text-xs font-bold uppercase tracking-wider text-outline">
                <th class="px-6 py-4 w-24">Image</th>
                <th class="px-6 py-4">Title & Description</th>
                <th class="px-6 py-4">Tags</th>
                <th class="px-6 py-4 w-28 text-center">Highlight</th>
                <th class="px-6 py-4 w-36 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-container">
              <tr v-for="n in 5" :key="n">
                <td class="px-6 py-4">
                  <div class="w-16 h-16 round bg-surface-container-high"></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex flex-col gap-2 max-w-md">
                    <div class="h-5 bg-surface-container-high rounded w-1/2"></div>
                    <div class="h-3 bg-surface-container-high rounded w-3/4"></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex gap-1">
                    <div class="h-4 bg-surface-container-high rounded w-10"></div>
                    <div class="h-4 bg-surface-container-high rounded w-12"></div>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="inline-block align-middle">
                    <div class="w-10 h-6 bg-surface-container-high rounded-full"></div>
                  </div>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-3">
                    <div class="w-6 h-6 bg-surface-container-high rounded"></div>
                    <div class="w-6 h-6 bg-surface-container-high rounded"></div>
                    <div class="w-6 h-6 bg-surface-container-high rounded"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </template>

      <template v-else>
        <section v-if="viewMode === 'card'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        <section v-else-if="viewMode === 'table'">
          <AdminInventoryTable
            :artworks="sortedArtworks"
            @edit="openEditModal"
            @delete="openDeleteModal"
            @download="handleDownload"
            @toggle-highlight="galleryStore.toggleHighlight"
          />
        </section>
      </template>

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
import { computed, ref, onMounted } from 'vue'
import AdminInventoryCard from './components/AdminInventoryCard.vue'
import AdminInventoryTable from './components/AdminInventoryTable.vue'
import type { Artwork } from '~/types'
import AdminDeleteModal from './popups/AdminDeleteModal.vue'
import AdminEditModal from './popups/AdminEditModal.vue'

definePageMeta({
  middleware: 'auth'
})

const galleryStore = useGalleryStore()

const searchQuery = ref('')
const viewMode = ref<'card' | 'table'>('card')

onMounted(() => {
  const savedMode = localStorage.getItem('admin_view_mode')
  if (savedMode === 'card' || savedMode === 'table') {
    viewMode.value = savedMode
  }
})

const setViewMode = (mode: 'card' | 'table') => {
  viewMode.value = mode
  localStorage.setItem('admin_view_mode', mode)
}

const isEditModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedArtwork = ref<any>(null)

const openCreateModal = () => {
  selectedArtwork.value = null
  isEditModalOpen.value = true
}

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
  } else {
    galleryStore.createArtwork(data)
  }
  isEditModalOpen.value = false
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
