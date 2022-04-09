import React, { ReactNode } from 'react'
import MainNavigation from '../Nav'
import { GlobalStyle, mixin } from '../../styles/index'
import styled, { ThemeProvider } from 'styled-components'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  console.log(mixin)
  return (
    <ThemeProvider theme={mixin}>
      <GlobalStyle />

      <MainNavigation />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
