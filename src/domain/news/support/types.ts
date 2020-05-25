export type News = {
  category: string
  datetime: number
  headline: string
  id: number
  image: string
  related: string
  source: string
  summary: string
  url: string
}

export type NewsCategory = 'general' | 'forex' | 'crypto' | 'merger'
