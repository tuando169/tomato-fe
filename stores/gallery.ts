import { defineStore } from 'pinia'
import type { Artwork, Artist } from '~/types'
import data from '~/assets/data.json'
import { useToastStore } from './toast'

export const useGalleryStore = defineStore('gallery', () => {
  const supabase = useSupabaseClient()
  const toast = useToastStore()
  
  // State
  const artist = ref<Artist>(data.artist)
  const artworks = ref<Artwork[]>([])
  const loading = ref(false)

  // Getters
  const highlightedArtworks = computed(() => {
    return artworks.value.filter(art => art.highlight)
  })

  const getArtworkById = computed(() => {
    return (id: string) => artworks.value.find(art => art.id === id)
  })

  const allTags = computed(() => {
    const tags = new Set<string>()
    artworks.value.forEach(art => {
      if (art.tags && Array.isArray(art.tags)) {
        art.tags.forEach(tag => tags.add(tag))
      }
    })
    return Array.from(tags)
  })

  // Actions
  async function fetchArtworks() {
    loading.value = true
    try {
      const { data: fetchedData, error } = await supabase
        .from('artworks')
        .select('*')
        .order('highlight', { ascending: false })
      
      if (error) throw error
      if (fetchedData) {
        artworks.value = fetchedData
      }
    } catch (error) {
      console.error('Error fetching artworks:', error)
    } finally {
      loading.value = false
    }
  }

  async function deleteArtwork(id: string) {
    try {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      artworks.value = artworks.value.filter(art => art.id !== id)
      toast.show('Artwork deleted successfully')
    } catch (error) {
      console.error('Error deleting artwork:', error)
      toast.show('Failed to delete artwork', 'error')
    }
  }

  async function updateArtwork(id: string, updates: Partial<Artwork>) {
    try {
      const { error } = await supabase
        .from('artworks')
        .update(updates)
        .eq('id', id)
      
      if (error) throw error
      
      const index = artworks.value.findIndex(art => art.id === id)
      if (index !== -1) {
        artworks.value[index] = { ...artworks.value[index], ...updates }
      }
      toast.show('Artwork updated successfully')
    } catch (error) {
      console.error('Error updating artwork:', error)
      toast.show('Failed to update artwork', 'error')
    }
  }

  async function toggleHighlight(id: string, highlight: boolean) {
    return updateArtwork(id, { highlight })
  }

  return {
    artist,
    artworks,
    loading,
    highlightedArtworks,
    getArtworkById,
    allTags,
    fetchArtworks,
    deleteArtwork,
    updateArtwork,
    toggleHighlight
  }
})
