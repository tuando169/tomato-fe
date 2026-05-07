<template>
  <div class="fixed top-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
    <TransitionGroup name="toast">
      <div 
        v-for="toast in toastStore.toasts" 
        :key="toast.id"
        class="pointer-events-auto min-w-[320px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-surface-container p-5 flex items-center gap-4 transition-all"
        :class="[
          toast.type === 'success' ? 'border-l-4 border-l-primary' : '',
          toast.type === 'error' ? 'border-l-4 border-l-error' : '',
          toast.type === 'info' ? 'border-l-4 border-l-outline' : ''
        ]"
      >
        <div 
          class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          :class="[
            toast.type === 'success' ? 'bg-primary/10 text-primary' : '',
            toast.type === 'error' ? 'bg-error/10 text-error' : '',
            toast.type === 'info' ? 'bg-outline/10 text-outline' : ''
          ]"
        >
          <span class="material-symbols-outlined text-2xl">
            {{ toast.type === 'success' ? 'check_circle' : toast.type === 'error' ? 'report' : 'info' }}
          </span>
        </div>
        <div class="flex-grow">
          <p class="text-sm font-bold text-on-surface leading-tight">{{ toast.type.toUpperCase() }}</p>
          <p class="text-xs text-outline mt-0.5">{{ toast.message }}</p>
        </div>
        <button @click="toastStore.remove(toast.id)" class="text-outline hover:text-on-surface transition-colors p-1">
          <span class="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}

.toast-move {
  transition: transform 0.4s ease;
}
</style>
