<template>
  <div class="about py-12">
    <!-- Hero Section -->
    <section class="container mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-16">
      <div class="md:w-1/2 ">
        <div class="aspect-square bg-surface-container round overflow-hidden relative z-10 shadow-xl">
          <!-- Placeholder image for artist -->
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Elena Vance" class="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col gap-8">
        <h1 class="text-4xl md:text-6xl font-serif text-primary-dim">{{data.artist.name}}</h1>
        <div class="flex gap-12 border-l-2 border-mint pl-6 py-2">
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">5+</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Years of Experience</p>
          </div>
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">12</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Artworks</p>
          </div>
          <div>
            <p class="text-3xl font-serif text-primary-dim mb-1">2</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Exhibitions</p>
          </div>
        </div>
        <p class="text-lg text-gray-600 leading-relaxed">{{ data.artist.philosophy }}</p>
        <div>
          <BaseButton to="/commission">
            Inquire
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Biography / Interactive Image -->
    <section class="bg-surface-container py-24">
      <div class="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2 flex flex-col gap-6">
          <div>
            <h2 class="text-3xl font-serif text-primary-dim mb-6">Biography</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">{{data.artist.bio}}</p>
          </div>
          
          <!-- Socials Integration -->
          <div class="pt-6 border-t border-surface-variant/40 flex flex-col gap-3">
            <span class="text-xs uppercase tracking-widest text-outline font-bold">Connect Online</span>
            <div class="flex flex-wrap gap-3">
              <a 
                :href="data.artist.socials.instagram" 
                target="_blank" 
                class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline/20 hover:border-primary text-outline hover:text-primary transition-all duration-300 bg-white/50 hover:bg-white text-sm shadow-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                Instagram
              </a>
              <a 
                :href="data.artist.socials.facebook" 
                target="_blank" 
                class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline/20 hover:border-primary text-outline hover:text-primary transition-all duration-300 bg-white/50 hover:bg-white text-sm shadow-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
              <a 
                :href="data.artist.socials.threads" 
                target="_blank" 
                class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline/20 hover:border-primary text-outline hover:text-primary transition-all duration-300 bg-white/50 hover:bg-white text-sm shadow-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"></path></svg>
                Threads
              </a>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <!-- Interactive Image: Black/White to Color on Hover -->
          <div class="aspect-video round overflow-hidden shadow-lg bg-gray-200">
             <img :src="data.artist.avatar" alt="Artwork detail" class="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Exhibitions -->
    <section class="max-w-4xl mx-auto px-6 py-24">
      <h2 class="text-3xl font-serif text-primary-dim mb-12 text-center">Exhibitions & Events</h2>
      <div class="flex flex-col border-t border-surface-container">
        <div v-for="i in 4" :key="i" class="group flex justify-between items-center py-6 border-b border-surface-container hover:bg-surface-container-lowest transition-colors px-4">
          <div class="flex gap-8 items-baseline">
            <span class="font-serif text-gray-400">202{{ 5 - i }}</span>
            <span class="text-lg text-primary-dim font-medium group-hover:text-primary transition-colors">Traces of Mist - Solo Exhibition</span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import data from '~/assets/data.json';
</script>
