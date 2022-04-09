// import styled from 'styled-components'
import { device } from './Breakpoint.style'
import styled, { StyledFunction } from 'styled-components'
import { mixin } from '../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background-color: var(--clr-dark);
  padding: 0 2.488rem;
  ${mixin.flexBetween}
  height: 5rem;
  /* backdrop-filter: blur(30rem); */
  width: 100%;
`



// export const Hamburger = styled.button<active>`
//   display: block;
//   position: relative;
//   z-index: 1;
//   user-select: none;
//   appearance: none;
//   outline: none;
//   background: none;
//   cursor: pointer;
//   border: none;

//   span {
//     display: block;
//     width: 33px;
//     height: 4px;
//     margin-bottom: 5px;
//     position: relative;
//     background-color: var(--clr-sky-blue);
//     border-radius: 6px;
//     z-index: 1;
//     transform-origin: 0 0;
//     transition: 0.4s;

//     &:nth-child(3) {
//       transform: ${(props) =>
//         props.IsActive && ` translate(-3px, 3px) rotate(-45deg)`};
//     }

//     &:nth-child(2) {
//       opacity: ${(props) => props.IsActive && '0'};
//       transform: ${(props) => props.IsActive && 'translateX(15px)'};
//     }

//     &:nth-child(1) {
//       transform: ${(props) =>
//         props.IsActive && 'translate(0px, -2px) rotate(45deg)'};
//     }
//   }

//   &:hover span:nth-child(2) {
//     transform: translateX(10px);
//     background-color: var(--clr-purple);
//   }

//   @media ${device.tablet} {
//     display: none;
//   }
// `

export const StyleLogo = styled.div`
  ${mixin.flexBetween}
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


