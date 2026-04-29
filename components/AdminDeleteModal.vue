<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-surface-container p-8 text-center space-y-6">
        <div class="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto">
          <span class="material-symbols-outlined text-4xl">delete_forever</span>
        </div>
        
        <div class="space-y-2">
          <h3 class="font-serif text-2xl text-on-surface">Delete Artwork?</h3>
          <p class="text-sm text-outline">
            Are you sure you want to delete <span class="font-bold text-on-surface">"{{ artwork?.title }}"</span>? This action cannot be undone.
          </p>
        </div>

        <div class="flex flex-col gap-3 pt-4">
          <button 
            @click="$emit('confirm')"
            class="w-full bg-error text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-error-dim transition-all shadow-lg shadow-error/20"
          >
            Yes, Delete Permanently
          </button>
          <button 
            @click="$emit('cancel')"
            class="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-outline hover:text-on-surface transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  artwork: any
}>()

defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()
</script>
