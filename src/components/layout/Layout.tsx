import React, { ReactNode } from 'react'
import MainNavigation from '../Nav'
import { GlobalStyle, theme } from '../../styles/index'
import styled, {
  FlattenSimpleInterpolation,
  ThemeProvider,
} from 'styled-components'
import { device } from '../../styles/Breakpoint.style'
import mixin from '../../styles/mixin'
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
  return (
    <ThemeProvider theme={theme}>
      <StyleLayout>
        <GlobalStyle />

        <MainNavigation />

        <StayledMain className="fillHeight">{children}</StayledMain>
      </StyleLayout>
    </ThemeProvider>
  )
}

export default Layout
