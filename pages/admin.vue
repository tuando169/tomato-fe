<template>
  <div class="max-w-7xl mx-auto bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
    <!-- Main Content Canvas -->
    <main class="min-h-screen bg-surface py-12">
      <!-- Header Section -->
      <header class="flex justify-between items-end mb-16">
        <div class="space-y-2">
          <span class="label-md uppercase tracking-[0.1rem] text-primary font-bold text-xs">Management</span>
          <h2 class="font-serif text-5xl text-on-surface tracking-tight">Inventory</h2>
        </div>
        <div class="flex gap-4">
          <div class="relative">
            <input class="bg-surface-container-highest border-none rounded-sm px-6 py-3 w-64 text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search inventory..." type="text"/>
            <span class="material-symbols-outlined absolute right-4 top-3 text-outline text-sm">search</span>
          </div>
          <button class="bg-primary-container text-on-primary-container px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-primary-dim hover:text-on-primary transition-all">
            Filters
          </button>
        </div>
      </header>

      <!-- Stats Grid (Subtle Tonal Depth) -->
      <section class="grid grid-cols-4 gap-6 mb-16">
        <div class="bg-surface-container-low p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">TOTAL ARTWORKS</span>
          <span class="font-serif text-3xl">142</span>
        </div>
        <div class="bg-surface-container p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">AVAILABLE</span>
          <span class="font-serif text-3xl text-primary">84</span>
        </div>
        <div class="bg-surface-container p-8 rounded-xl flex flex-col gap-2">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-outline">RECENTLY SOLD</span>
          <span class="font-serif text-3xl">12</span>
        </div>
        <div class="bg-surface-container-high p-8 rounded-xl flex flex-col gap-2 border-l-4 border-primary/20">
          <span class="text-[10px] font-bold tracking-[0.15rem] uppercase text-primary">REVENUE (MONTHLY)</span>
          <span class="font-serif text-3xl">$42,850</span>
        </div>
      </section>

      <!-- Inventory List (The Bento/Editorial Table) -->
      <section class="space-y-4">
        <!-- Table Header -->
        <div class="grid grid-cols-12 px-8 py-4 text-[10px] font-bold tracking-[0.2rem] uppercase text-outline">
          <div class="col-span-6">Artwork Details</div>
          <div class="col-span-2 text-center">Status</div>
          <div class="col-span-2 text-right">Price</div>
          <div class="col-span-2 text-right">Actions</div>
        </div>

        <!-- List Item 1 -->
        <div class="group grid grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-500">
          <div class="col-span-6 flex items-center gap-6">
            <div class="w-20 h-24 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
              <img class="w-full h-full object-cover" data-alt="abstract painting with soft mint green and gold leaf textures on a canvas background with depth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDh3otpdEQ3lBdKm6WgOt6SedcMa0Cdhg8JrQ3_0gKCieiy4IEYuONWWo_GwY0brH1SPRmj36OfFiVeIwz6IPZJJdn1vTsMNi6l6gvz7tyJaRpUONB4b0UfdX-QBDEVa97SrSuB7GCobzcoD9SVYt3sGT576YZVoMDZMrtvE4_M6lbJM10SUaZIoevee6iHkTRxKRaGzn9F6z8l7Vt0ibJl9cuPIYVPnHgu2ebFYl3cRI6yqYf-hCNOmQCDev7z_3ppcsBEvMMQO6d"/>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif text-xl text-on-surface">Ethereal Breath No. 4</h4>
              <div class="flex gap-2 items-center">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold tracking-widest uppercase">Oil on Canvas</span>
                <span class="text-[10px] text-outline italic">Created June 2024</span>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex justify-center">
            <span class="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold tracking-widest uppercase">AVAILABLE</span>
          </div>
          <div class="col-span-2 text-right">
            <span class="font-serif text-lg">$3,200</span>
          </div>
          <div class="col-span-2 flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="material-symbols-outlined text-outline hover:text-primary">edit</button>
            <button class="material-symbols-outlined text-outline hover:text-error">delete</button>
            <button class="material-symbols-outlined text-outline hover:text-on-surface">more_vert</button>
          </div>
        </div>

        <!-- List Item 2 -->
        <div class="group grid grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-500">
          <div class="col-span-6 flex items-center gap-6">
            <div class="w-20 h-24 rounded-lg overflow-hidden bg-surface-container-high shrink-0">
              <img class="w-full h-full object-cover" data-alt="minimalist sculptural charcoal sketch of a draped figure with soft shadows and organic lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mY-NUS7t8Z8Juq-IaqdegTFer-G-EHPqp9-xyCIHGL9UrqCw8tYxVaNKHxFUt6sLsVQGHF-6tvXVnURL_QE1mfN6fQJ6DTYQi_al_xBD1FihHooi0XqbTVTMaIsxuQlnhUCbGI-EGNmfZGUlgoZAd2a54aNoI1NNP9PC0YhueJBIC4j9Sgr5paClXMmvwzjSmMrZsst1vPMqf0N76vM7pXAUAOjJeasxJ2FIUlNgUQUZZQVUdiy8VwLQyh7_zjQEMopiIbxsfeSI"/>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif text-xl text-on-surface">Silent Figure Study</h4>
              <div class="flex gap-2 items-center">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold tracking-widest uppercase">Charcoal</span>
                <span class="text-[10px] text-outline italic">Created May 2024</span>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex justify-center">
            <span class="px-3 py-1 rounded-full bg-surface-container-highest text-outline text-[10px] font-bold tracking-widest uppercase">SOLD</span>
          </div>
          <div class="col-span-2 text-right">
            <span class="font-serif text-lg text-outline line-through">$1,850</span>
          </div>
          <div class="col-span-2 flex justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="material-symbols-outlined text-outline hover:text-primary">visibility</button>
            <button class="material-symbols-outlined text-outline hover:text-on-surface">receipt_long</button>
          </div>
        </div>

      </section>

      <!-- Pagination (Subtle Layering) -->
      <footer class="mt-16 flex justify-between items-center py-8 border-t border-surface-container">
        <p class="text-[10px] font-bold tracking-widest uppercase text-outline">Showing 4 of 142 artworks</p>
        <div class="flex gap-2">
          <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-container text-outline hover:bg-surface-container hover:text-on-surface transition-all">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-xs">1</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-container text-outline hover:bg-surface-container hover:text-on-surface transition-all font-bold text-xs">2</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-container text-outline hover:bg-surface-container hover:text-on-surface transition-all font-bold text-xs">3</button>
          <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-container text-outline hover:bg-surface-container hover:text-on-surface transition-all">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </footer>
    </main>

    <!-- Global Footer -->
    <footer class="w-full py-16 px-12 bg-emerald-50 dark:bg-emerald-950 flex flex-col md:flex-row justify-between items-center gap-8 text-emerald-900 dark:text-emerald-50 relative z-50 ml-0 md:ml-64 w-[calc(100%-16rem)]">
      <div class="font-serif text-lg">The Ethereal Gallery</div>
      <div class="flex gap-8 font-sans text-xs uppercase tracking-widest">
        <a class="text-emerald-800/40 dark:text-emerald-200/40 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Privacy Policy</a>
        <a class="text-emerald-800/40 dark:text-emerald-200/40 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Terms of Service</a>
        <a class="text-emerald-800/40 dark:text-emerald-200/40 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors" href="#">Shipping & Returns</a>
      </div>
      <div class="font-sans text-xs uppercase tracking-widest opacity-60">
        © 2024 The Ethereal Gallery. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false, // Do not use the default layout so we don't have double NavBars
  middleware: 'auth'
})
</script>
