import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])
  let nextId = 0

  function show(message: string, type: ToastType = 'success') {
    const id = nextId++
    toasts.value.push({ id, message, type })
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      remove(id)
    }, 3000)
  }

  function remove(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { toasts, show, remove }
})
