<template>
  <footer class="bg-surface-container py-12 mt-20 border-t border-seafoam">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <h2 class="font-serif text-2xl text-primary-dim mb-2">bochoinuoc</h2>
        <p class="text-sm text-gray-500">© {{ new Date().getFullYear() }} All rights reserved.</p>
      </div>
      
      <div class="flex gap-4">
        <a href="#" class="w-10 h-10 rounded-md bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="#" class="w-10 h-10 rounded-md bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </a>
        <a href="#" class="w-10 h-10 rounded-md bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm" aria-label="Threads">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"></path></svg>
        </a>
      </div>
    </div>
  </footer>
</template>
