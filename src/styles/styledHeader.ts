// import styled from 'styled-components'
import { device } from "./Breakpoint.style"
import styled, { StyledFunction } from "styled-components"

export const StyleLogo = styled.div`
  ${({
    theme: {
      mixin: { flexBetween },
    },
  }) => flexBetween}
  a {
    display: inline-block;
    font-size: 1.2rem;
    border-radius: 5px;
    text-align: center;
    color: var(--clr-purple-light);
    font-weight: bold;
  }

  div {
    font-weight: bold;
    font-size: inherit;
    text-transform: capitalize;
    &::first-letter {
      color: var(--clr-sky-blue);
    }
  }
`
