import { defineStore } from 'pinia'
import data from '~/assets/data.json'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    artist: data.artist,
    collections: data.collections,
    categories: data.categories,
    artworks: data.artworks.sort((a, b) => {
      if (a.highlight === b.highlight) return 0;
      return a.highlight ? -1 : 1;
    })
  }),
  getters: {
    highlightedArtworks: (state) => {
      return state.artworks.filter(art => art.highlight)
    },
    getArtworkById: (state) => {
      return (id: string) => state.artworks.find(art => art.id === id)
    },
    getCollectionById: (state) => {
      return (id: string) => state.collections.find(col => col.id === id)
    },
    getCategoriesByIds: (state) => {
      return (ids: string[]) => state.categories.filter(cat => ids.includes(cat.id))
    }
  },
  actions: {
    deleteArtwork(id: string) {
      this.artworks = this.artworks.filter(art => art.id !== id)
    },
    updateArtwork(id: string, updates: any) {
      const index = this.artworks.findIndex(art => art.id === id)
      if (index !== -1) {
        this.artworks[index] = { ...this.artworks[index], ...updates }
      }
    }
  }
})
