import { type } from 'os'
import { useEffect, useState } from 'react'

import { ScrollDirection } from '../../interface'

export const ScrollDirections: ScrollDirection = {
  up: 'up',
  down: 'down',
  nothing: null,
}


// https://javascript.plainenglish.io/custom-scrolling-direction-react-hook-f55558206ab6




export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('')
  const [prevOffset, setPrevOffset] = useState(0)
  const toggleScrollDirection = () => {
    let scrollY = window.scrollY
    if (scrollY === 0) {
      setScrollDirection('')
    }
    if (scrollY > prevOffset) {
      setScrollDirection(ScrollDirections.down)
    } else if (scrollY < prevOffset) {
      setScrollDirection(ScrollDirections.up)
    }
    setPrevOffset(scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection)
    return () => {
      window.removeEventListener('scroll', toggleScrollDirection)
    }
  })
  return scrollDirection
}
