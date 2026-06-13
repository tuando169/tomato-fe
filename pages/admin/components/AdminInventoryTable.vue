<template>
  <div class="overflow-x-auto rounded-2xl border border-surface-container bg-surface-container-lowest shadow-sm">
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
        <tr 
          v-for="artwork in artworks" 
          :key="artwork.id"
          class="hover:bg-surface-container-low/45 transition-colors"
        >
          <td class="px-6 py-4">
            <div class="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high border border-surface-container relative group">
              <img :src="artwork.images[0]" :alt="artwork.title" class="w-full h-full object-cover" />
              <span class="absolute bottom-0 right-0 bg-black/60 px-1 py-0.5 rounded-tl-md text-[8px] text-white font-bold">
                {{ artwork.images.length }} Img
              </span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col gap-1 max-w-md">
              <span class="font-serif text-lg text-on-surface line-clamp-1 font-semibold">{{ artwork.title }}</span>
              <span class="text-xs text-outline line-clamp-2 leading-relaxed">{{ artwork.description }}</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-wrap gap-1">
              <span 
                v-for="tag in artwork.tags" 
                :key="tag" 
                class="text-[9px] px-2 py-0.5 rounded-sm bg-tertiary-container text-on-tertiary-container font-bold tracking-wider uppercase"
              >
                {{ tag }}
              </span>
            </div>
          </td>
          <td class="px-6 py-4 text-center">
            <div class="inline-block align-middle">
              <BaseTooltip text="Highlight">
                <BaseSwitch :model-value="artwork.highlight" @update:model-value="$emit('toggleHighlight', artwork.id, $event)" />
              </BaseTooltip>
            </div>
          </td>
          <td class="px-6 py-4 text-right">
            <div class="flex items-center justify-end gap-3">
              <BaseTooltip text="Download">
                <button 
                  @click.stop="$emit('download', artwork, artwork.images[0])" 
                  class="material-symbols-outlined text-outline hover:text-primary transition-colors text-lg"
                >
                  download
                </button>
              </BaseTooltip>
              <BaseTooltip text="Edit">
                <button 
                  @click="$emit('edit', artwork)" 
                  class="material-symbols-outlined text-outline hover:text-primary transition-colors text-lg"
                >
                  edit
                </button>
              </BaseTooltip>
              <BaseTooltip text="Delete">
                <button 
                  @click="$emit('delete', artwork)" 
                  class="material-symbols-outlined text-outline hover:text-error transition-colors text-lg"
                >
                  delete
                </button>
              </BaseTooltip>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Artwork } from '~/types'

defineProps<{
  artworks: Artwork[]
}>()

defineEmits<{
  (e: 'edit', artwork: Artwork): void
  (e: 'delete', artwork: Artwork): void
  (e: 'download', artwork: Artwork, url: string): void
  (e: 'toggleHighlight', id: string, value: boolean): void
}>()
</script>
