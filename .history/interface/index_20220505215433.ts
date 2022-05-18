
import { IconType } from 'react-icons'

export type ui = {
  isActive: boolean
  toggleIsActive: () => void
  setManuIsActive: (value: boolean) => void
}

export type scrolltDirections = {
  toggleHeader: boolean
  direction: string
}

export type ScrollDirection = {
  up: string

  down: string
  nothing: null
}

export type Icon = {
  IconList: IconType
}



export type repoData= {
  id: string
  name: string
  description: string
  homepageUrl: string
  openGraphImageUrl: string
  url: string
  object?: {
    text?: string
  }

  repositoryTopics: {
    nodes: Object[]
  }
}