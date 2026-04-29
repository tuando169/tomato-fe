<template>
  <div class="about py-12">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-16">
      <div class="md:w-1/2 relative">
        <div class="absolute -inset-4 bg-sage/20 rotate-3 rounded-xl blur-sm z-0"></div>
        <div class="absolute -top-6 -left-6 bg-white/60 backdrop-blur-md px-6 py-3 rounded shadow-sm rotate-[-5deg] z-20 border border-white/40">
          <span class="font-serif italic text-primary-dim">{{ store.artist.name }}</span>
        </div>
        <div class="aspect-[3/4] bg-surface-container rounded-lg overflow-hidden relative z-10 shadow-xl">
          <!-- Placeholder image for artist -->
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Elena Vance" class="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col gap-8">
        <h1 class="text-4xl md:text-6xl font-serif text-primary-dim">Seeker of<br>light.</h1>
        <div class="flex gap-12 border-l-2 border-mint pl-6 py-2">
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">{{ store.artist.experienceYears }}+</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Years of Experience</p>
          </div>
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">{{ store.artist.completedWorks }}</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Artworks</p>
          </div>
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">{{ store.artist.soloExhibitions }}</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Exhibitions</p>
          </div>
        </div>
        <p class="text-lg text-gray-600 leading-relaxed">{{ store.artist.philosophy }}</p>
        <div>
          <BaseButton to="/commission">
            Inquire
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Biography / Interactive Image -->
    <section class="bg-surface-container py-24">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2">
          <h2 class="text-3xl font-serif text-primary-dim mb-6">Biography</h2>
          <p class="text-gray-600 mb-4 leading-relaxed">Born by the Pacific coast, Elena has always been fascinated by the way light pierces through thick fog. These childhood visual experiences shaped her artistic style, where color is not just a material, but a language to express moments of stillness.</p>
          <p class="text-gray-600 leading-relaxed">She studied at the London Academy of Art before returning to Canada to establish her own studio. Elena's works are currently featured in many private collections across North America and Europe.</p>
        </div>
        <div class="md:w-1/2 w-full">
          <!-- Interactive Image: Black/White to Color on Hover -->
          <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200">
             <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop" alt="Artwork detail" class="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Exhibitions -->
    <section class="max-w-4xl mx-auto px-6 py-24">
      <h2 class="text-3xl font-serif text-primary-dim mb-12 text-center">Exhibitions & Events</h2>
      <div class="flex flex-col border-t border-surface-container">
        <div v-for="i in 4" :key="i" class="group flex justify-between items-center py-6 border-b border-surface-container hover:bg-surface-container-lowest transition-colors px-4 cursor-pointer">
          <div class="flex gap-8 items-baseline">
            <span class="font-serif text-gray-400">202{{ 5 - i }}</span>
            <span class="text-lg text-primary-dim font-medium group-hover:text-primary transition-colors">Traces of Mist - Solo Exhibition</span>
          </div>
          <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
            <span class="text-sm uppercase tracking-widest">View Catalog</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import { useGalleryStore } from '~/stores/gallery'
const store = useGalleryStore()
</script>
