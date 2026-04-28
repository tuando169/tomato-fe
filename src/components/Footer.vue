<template>
  <footer class="bg-surface-container py-12 mt-20 border-t border-seafoam">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h2 class="font-serif text-2xl text-primary-dim mb-2">Elena Vance</h2>
        <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} All rights reserved.</p>
      </div>
      
      <div class="flex gap-4">
        <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
          <span class="material-symbols-outlined">photo_camera</span>
        </a>
        <a href="#" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
          <span class="material-symbols-outlined">mail</span>
        </a>
      </div>
    </div>
  </footer>
</template>
