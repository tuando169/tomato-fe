<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-surface-container">
        <header class="px-8 py-6 border-b border-surface-container flex justify-between items-center">
          <h3 class="font-serif text-2xl text-on-surface">Edit Artwork</h3>
          <button @click="$emit('close')" class="material-symbols-outlined text-outline hover:text-on-surface transition-colors">close</button>
        </header>
        
        <form @submit.prevent="handleSave" class="p-8 space-y-6">
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-outline">Title</label>
            <input 
              v-model="form.title" 
              type="text" 
              required
              class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
            />
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-outline">Material</label>
            <input 
              v-model="form.material" 
              type="text" 
              required
              class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-outline">Year</label>
              <input 
                v-model.number="form.year" 
                type="number" 
                required
                class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-outline">Price ($)</label>
              <input 
                v-model.number="form.price" 
                type="number" 
                required
                class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              />
            </div>
          </div>

          <div class="flex justify-end gap-4 pt-4">
            <button 
              type="button"
              @click="$emit('close')"
              class="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-widest text-outline hover:text-on-surface transition-all"
            >
              Cancel
            </button>
            <BaseButton type="submit">
              Save Changes
            </BaseButton>
          </div>
        </form>
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
import { ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
  artwork: any
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save', data: any): void
}>()

const form = ref({
  title: '',
  material: '',
  year: 0,
  price: 0
})

watch(() => props.artwork, (newVal) => {
  if (newVal) {
    form.value = {
      title: newVal.title,
      material: newVal.material,
      year: newVal.year,
      price: newVal.price
    }
  }
}, { immediate: true })

const handleSave = () => {
  emit('save', { ...form.value })
}
</script>
