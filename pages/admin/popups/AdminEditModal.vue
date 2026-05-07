<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm ">
      <div class="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden border border-surface-container flex flex-col max-h-[90vh]">
        <header class="px-8 py-6 border-b border-surface-container flex justify-between items-center shrink-0">
          <h3 class="font-serif text-2xl text-on-surface">Edit Artwork</h3>
          <button @click="$emit('close')" class="material-symbols-outlined text-outline hover:text-on-surface transition-colors">close</button>
        </header>
        
        <form @submit.prevent="handleSave" class="p-8 space-y-6 overflow-y-auto">
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-6">
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
                <label class="text-xs font-bold uppercase tracking-widest text-outline">Description</label>
                <textarea 
                  v-model="form.description" 
                  rows="6"
                  required
                  class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                ></textarea>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-outline">Tags (comma separated)</label>
                <input 
                  v-model="form.tagsString" 
                  type="text" 
                  placeholder="Oil, Botanical, 2024..."
                  class="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                />
              </div>
            </div>

            <div class="space-y-4">
              <label class="text-xs font-bold uppercase tracking-widest text-outline block">Image Gallery</label>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="(img, idx) in form.images" :key="idx" class="relative aspect-square rounded-xl overflow-hidden group border border-surface-container">
                  <img :src="img" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button type="button" @click="removeImage(idx)" class="w-8 h-8 rounded-full bg-error text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <span class="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
                
                <button 
                  type="button" 
                  @click="triggerUpload"
                  :disabled="isUploading"
                  class="aspect-square rounded-xl border-2 border-dashed border-outline/30 flex flex-col items-center justify-center text-outline hover:border-primary hover:text-primary hover:bg-primary/5 transition-all group disabled:opacity-50"
                >
                  <span class="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
                    {{ isUploading ? 'sync' : 'add_photo_alternate' }}
                  </span>
                  <span class="text-[10px] font-bold uppercase mt-2 tracking-widest">{{ isUploading ? 'Uploading...' : 'Add Image' }}</span>
                </button>
              </div>
              <input type="file" ref="fileInput" hidden multiple accept="image/*" @change="onFileChange" />
              
              <div class="pt-2">
                <label class="text-[10px] text-outline italic">Tip: You can upload multiple files at once.</label>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-4 pt-6 border-t border-surface-container shrink-0">
            <button 
              type="button"
              @click="$emit('close')"
              class="px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-outline hover:text-on-surface transition-all"
            >
              Cancel
            </button>
            <BaseButton type="submit" :disabled="isUploading">
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
  transform: scale(0.95);
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps<{
  isOpen: boolean
  artwork: any
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save', data: any): void
}>()

const supabase = useSupabaseClient()
const fileInput = ref<HTMLInputElement | null>(null)
const isUploading = ref(false)

const form = ref({
  title: '',
  description: '',
  tagsString: '',
  images: [] as string[]
})

watch(() => props.isOpen, (newVal) => {
  if (import.meta.client) {
    document.body.style.overflow = newVal ? 'hidden' : ''
  }
  
  if (newVal) {
    form.value = {
      title: props.artwork?.title || '',
      description: props.artwork?.description || '',
      tagsString: props.artwork?.tags ? props.artwork.tags.join(', ') : '',
      images: props.artwork?.images ? [...props.artwork.images] : []
    }
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

const triggerUpload = () => {
  fileInput.value?.click()
}

const onFileChange = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (!files || files.length === 0) return

  isUploading.value = true
  
  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
      const filePath = `artworks/${fileName}`

      const { data, error } = await supabase.storage
        .from('artworks')
        .upload(filePath, file)

      if (error) throw error

      if (data) {
        const { data: { publicUrl } } = supabase.storage
          .from('artworks')
          .getPublicUrl(filePath)
        
        form.value.images.push(publicUrl)
      }
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    alert('Failed to upload image. Please ensure you have an "artworks" bucket set up in Supabase Storage with public access.')
  } finally {
    isUploading.value = false
    if (fileInput.value) fileInput.value.value = ''
  }
}

const removeImage = (index: number) => {
  form.value.images.splice(index, 1)
}

const handleSave = () => {
  const tags = form.value.tagsString
    .split(',')
    .map(t => t.trim())
    .filter(t => t.length > 0)
    
  emit('save', {  
    title: form.value.title,
    description: form.value.description,
    tags: tags,
    images: form.value.images
  })
}
</script>
