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
      <section class="grid grid-cols-4 gap-6 mb-6">
        <div class="bg-surface-container-low p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">TOTAL ARTWORKS</span>
          <span class="font-serif text-3xl">{{ galleryStore.artworks.length }}</span>
        </div>
        <div class="bg-surface-container p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">HIGHLIGHTED</span>
          <span class="font-serif text-3xl text-primary">{{ galleryStore.highlightedArtworks.length }}</span>
        </div>
        <div class="bg-surface-container p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">CATEGORIES</span>
          <span class="font-serif text-3xl">{{ galleryStore.categories.length }}</span>
        </div>
        <div class="bg-surface-container-high p-8 rounded-xl flex flex-col gap-2 border-l-4 border-primary/20">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-primary">TOTAL VALUE</span>
          <span class="font-serif text-3xl">${{ galleryStore.artworks.reduce((sum, a) => sum + a.price, 0).toLocaleString() }}</span>
        </div>
      </section>

      <!-- Inventory List (The Bento/Editorial Table) -->
      <section class="space-y-4">
        <!-- Table Header -->
        <div class="grid grid-cols-12 px-8 py-4 text-[10px] font-bold tracking-[0.2rem] uppercase text-outline">
          <div class="col-span-6">Artwork Details</div>
          <div class="col-span-2 text-center">Highlight</div>
          <div class="col-span-2 text-right">Price</div>
          <div class="col-span-2 text-right">Actions</div>
        </div>

        <!-- Dynamic Artwork List -->
        <div v-for="artwork in sortedArtworks" :key="artwork.id" class="group grid grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-500">
          <div class="col-span-6 flex items-center gap-6">
            <div class="w-20 h-24 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
              <img class="w-full h-full object-cover" :alt="artwork.title" :src="artwork.images[0]"/>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif text-xl text-on-surface">{{ artwork.title }}</h4>
              <div class="flex gap-2 items-center">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold tracking-widest uppercase">{{ artwork.material }}</span>
                <span class="text-[10px] text-outline italic">Created {{ artwork.year }}</span>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex justify-center">
            <BaseSwitch v-model="artwork.highlight" />
          </div>
          <div class="col-span-2 text-right">
            <span class="font-serif text-lg">${{ artwork.price.toLocaleString() }}</span>
          </div>
          <div class="col-span-2 flex justify-end gap-4">
            <button @click="openEditModal(artwork)" class="material-symbols-outlined text-outline hover:text-primary transition-colors">edit</button>
            <button @click="openDeleteModal(artwork)" class="material-symbols-outlined text-outline hover:text-error transition-colors">delete</button>
          </div>
        </div>

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
  return galleryStore.artworks.filter(artwork => 
    removeDiacritics(artwork.title.toLowerCase()).includes(query) || 
    removeDiacritics(artwork.material.toLowerCase()).includes(query)
  )
})
</script>
