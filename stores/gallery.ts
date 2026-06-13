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

  function getArtworkById(id: string) {
    return artworks.value.find(art => art.id === id)
  }

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

  const getStoragePathFromUrl = (url: string) => {
    const marker = '/storage/v1/object/public/artworks/'
    const index = url.indexOf(marker)
    if (index !== -1) {
      return decodeURIComponent(url.substring(index + marker.length))
    }
    return null
  }

  async function deleteArtwork(id: string) {
    try {
      const artwork = artworks.value.find(art => art.id === id)
      
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      artworks.value = artworks.value.filter(art => art.id !== id)
      toast.show('Artwork deleted successfully')

      if (artwork && artwork.images && artwork.images.length > 0) {
        const paths = artwork.images
          .map(url => getStoragePathFromUrl(url))
          .filter(path => path !== null) as string[]
        
        if (paths.length > 0) {
          await supabase.storage.from('artworks').remove(paths)
        }
      }
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

  async function createArtwork(artwork: Omit<Artwork, 'id' | 'created_at'>) {
    try {
      const { data: newArtwork, error } = await supabase
        .from('artworks')
        .insert([{ ...artwork, highlight: false }])
        .select()
        .single()
      
      if (error) throw error
      if (newArtwork) {
        artworks.value.unshift(newArtwork)
        toast.show('Artwork created successfully')
      }
    } catch (error) {
      console.error('Error creating artwork:', error)
      toast.show('Failed to create artwork', 'error')
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
    createArtwork,
    toggleHighlight
  }
})
