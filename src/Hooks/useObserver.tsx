import { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"
const useObserver = () => {
  const [currentWindowSize, setCurrentWindowSize] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-100px",

    threshold: [0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75],
  })
  useEffect(() => {
    if (entry?.isIntersecting && inView) setCurrentWindowSize(true)

    return () => {
      setCurrentWindowSize(false)
    }
  }, [entry?.isIntersecting, inView])

  return {
    ref,
    currentWindowSize,
    smallScreen,
  }
}

export default useObserver
