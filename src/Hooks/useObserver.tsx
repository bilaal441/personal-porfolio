import { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"
const useObserver = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "-100px 0px 0px 0px",

    threshold: [0.15, 0.2, 0.3],

    delay: 100,
  })

  return {
    ref,
    entry,
    inView,
  }
}

export default useObserver
