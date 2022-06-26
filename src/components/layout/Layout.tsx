import React, { ReactNode, useState, useEffect, Fragment } from "react"
import MainNavigation from "../Nav"
import { GlobalStyle, theme } from "../../styles/index"
import Footer from "../sections/Footer"
import styled, {
  FlattenSimpleInterpolation,
  ThemeProvider,
} from "styled-components"
import { device } from "../../styles/Breakpoint.style"
import mixin from "../../styles/mixin"
import { useRouter } from "next/router"
import Loader from "../Loader"
import { AnimatePresence } from "framer-motion"

type Props = {
  children: ReactNode
}

const StayledMain = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 80rem;
  min-height: 100vh;

  padding: 6.25rem 1.3rem;

  @media ${device.tablet} {
    padding: 7.5rem 2.5rem;
  }

  @media ${device.laptopL} {
    padding: 10rem 5rem;
  }

  &.fillHeight {
    padding: 0 150px;
    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }
`

const StyleLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const { asPath, replace, events } = router
  const home = asPath === "/" || asPath.includes("#")
  const [isHome, setIshome] = useState(home)

  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return

    if (asPath.includes("#") && !isLoading) {
      const section = document.getElementById(asPath.replaceAll("/#", ""))

      setTimeout(() => {
        if (section) {
          section?.scrollIntoView()

          section?.focus()
        }
      }, 0)
    }
    const handller = (url: string) => {
      if (url === "/" && !isLoading) setIsLoading(true)
    }
    router.events.on("hashChangeComplete", handller)

    return () => router.events.off("hashChangeComplete", handller)
  }, [router, asPath, isLoading])

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>
          {isLoading && (
            <Loader
              finishLoading={() => {
                setIsLoading(false)
              }}
              isLoading={isLoading}
            />
          )}
        </AnimatePresence>
        {!isLoading && (
          <StyleLayout>
            <MainNavigation />

            <div id="content">
              <StayledMain className="fillHeight">{children}</StayledMain>
              <Footer />
            </div>
          </StyleLayout>
        )}
      </ThemeProvider>
    </div>
  )
}

export default Layout
