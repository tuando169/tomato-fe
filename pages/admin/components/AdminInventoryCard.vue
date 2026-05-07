<template>
  <div class="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-500 flex flex-col border border-surface-container">
    <!-- Image Container -->
    <div class="aspect-1 overflow-hidden bg-surface-container-high relative">
      <img 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
        :alt="artwork.title" 
        :src="localHoveredImage || artwork.images[0]"
      />
      
      <!-- Image Counter -->
      <div class="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold tracking-widest uppercase">
        {{ artwork.images.length }} Images
      </div>

      <!-- Download Button Overlay -->
      <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <BaseTooltip text="Download">
          <button 
            @click.stop="$emit('download', localHoveredImage || artwork.images[0])" 
            class="text-[24px] bg-black/40 backdrop-blur-md px-2 py-1 rounded text-white hover:text-primary transition-colors material-symbols-outlined shadow-sm"
          >
            download
          </button>
        </BaseTooltip>
      </div>
    </div>

    <!-- Thumbnails (Hover to preview) -->
    <div class="flex gap-1 px-4 py-2 bg-surface-container-low/50 overflow-x-auto hide-scrollbar border-b border-surface-container">
      <div 
        v-for="(img, idx) in artwork.images" 
        :key="idx"
        @mouseenter="localHoveredImage = img"
        class="w-10 h-12 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all cursor-pointer"
        :class="[
          (localHoveredImage === img || (!localHoveredImage && idx === 0))
          ? 'border-primary' 
          : 'border-transparent opacity-60 hover:opacity-100'
        ]"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow gap-4">
      <div class="space-y-1">
        <h4 class="font-serif text-xl text-on-surface line-clamp-1">{{ artwork.title }}</h4>
        <p class="text-xs text-outline line-clamp-2 leading-relaxed h-8">{{ artwork.description }}</p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-1.5 mt-auto">
        <span v-for="tag in artwork.tags" :key="tag" class="text-[10px] px-2 py-0.5 rounded-sm bg-tertiary-container text-on-tertiary-container font-bold tracking-wider uppercase">
          {{ tag }}
        </span>
      </div>

      <!-- Actions -->
      <div class="flex justify-between items-center pt-4 border-t border-surface-container">
        <!-- Switch with Component Tooltip -->
        <BaseTooltip text="Highlight">
          <BaseSwitch :model-value="artwork.highlight" @update:model-value="$emit('toggleHighlight', $event)" />
        </BaseTooltip>
        
        <div class="flex gap-4">
          <!-- Edit with Component Tooltip -->
          <BaseTooltip text="Edit">
            <button @click="$emit('edit')" class="material-symbols-outlined text-outline hover:text-primary transition-colors text-xl">edit</button>
          </BaseTooltip>
          
          <!-- Delete with Component Tooltip -->
          <BaseTooltip text="Delete">
            <button @click="$emit('delete')" class="material-symbols-outlined text-outline hover:text-error transition-colors text-xl">delete</button>
          </BaseTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  artwork: any
}>()

defineEmits<{
  (e: 'edit'): void
  (e: 'delete'): void
  (e: 'download', url: string): void
  (e: 'toggleHighlight', value: boolean): void
}>()

const localHoveredImage = ref<string | null>(null)
</script>
