<template>
  <div class="min-h-screen flex flex-col bg-surface text-gray-800">
    <NavBar v-if="showLayout" />
    <main :class="['flex-grow', showLayout ? 'pt-20' : '']">
      <NuxtPage />
    </main>
    <Footer v-if="showLayout" />
  </div>
</template>

<script setup>
const route = useRoute()
const showLayout = computed(() => route.meta.layout !== false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
