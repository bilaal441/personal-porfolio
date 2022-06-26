import { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"
const useObserver = () => {
  // const is
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: "20px 0px 0px -100px",

    threshold: [0.2, 0.4, 0.5, 0.6],

    delay: 100,
  })

  return {
    ref,
    entry,
    inView,
  }
}

export default useObserver
