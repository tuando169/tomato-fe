export interface Artwork {
  id: string
  title: string
  description: string
  images: string[]
  tags: string[]
  highlight: boolean
  created_at?: string
}

export interface Artist {
  name: string
  philosophy: string
  bio: string
  avatar: string
  socials: {
    instagram: string
    facebook: string
    threads: string
  }
}
