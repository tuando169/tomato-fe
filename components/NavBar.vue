<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-surface-container">
    <div class="max-w-7xl mx-auto h-20 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="font-serif text-2xl tracking-widest text-primary-dim hover:opacity-80 transition-opacity">
        bochoinuoc
      </router-link>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
        <router-link to="/gallery" class="hover:text-primary transition-all duration-300" active-class="text-primary font-bold">
          Gallery
        </router-link>
        <router-link to="/about" class="hover:text-primary transition-all duration-300" active-class="text-primary font-bold">
          About
        </router-link>
        <BaseButton to="/commission" size="sm">
          Commission
        </BaseButton>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-primary-dim" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-surface-container py-6 px-6 flex flex-col gap-6 text-center">
      <router-link to="/gallery" class="text-lg hover:text-primary transition-all" @click="isMobileMenuOpen = false">Gallery</router-link>
      <router-link to="/about" class="text-lg hover:text-primary transition-all" @click="isMobileMenuOpen = false">About</router-link>
      <router-link to="/commission" class="text-lg hover:text-primary transition-all" @click="isMobileMenuOpen = false">Contact</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
