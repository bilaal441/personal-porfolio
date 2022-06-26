// import styled from 'styled-components'
import { device } from "./Breakpoint.style"
import styled, { StyledFunction } from "styled-components"

export const StyleLogo = styled.div`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}

  a {
    width: 2.5rem;
    height: 2.5rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
