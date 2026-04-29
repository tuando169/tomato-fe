import { defineStore } from 'pinia'
import data from '~/assets/data.json'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    artist: data.artist,
    collections: data.collections,
    categories: data.categories,
    artworks: data.artworks,
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
  }
})
