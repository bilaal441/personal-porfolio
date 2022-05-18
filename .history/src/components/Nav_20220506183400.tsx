import Link from 'next/link'
import Image from 'next/image'

import { StyleLogo } from '../styles/styledHeader'
import Logo from '../../imgs/logo.png'

import React, { useState, ReactNode, useEffect, useCallback } from 'react'
import NavList from './NavList'
import Menu from './Menu'
import styled from 'styled-components'
import { scrolltDirections } from '../../interface'
import { css } from 'styled-components'

import usePrefersReducedMotion from '../Hooks/ usePrefersReducedMotion'

import { device, desktopApp } from '../styles/Breakpoint.style'
import {
  useScrollDirection,
  ScrollDirections,
} from '../Hooks/ useScrollDirection '
type Props = {
  children?: ReactNode
}

const Header = styled.header<scrolltDirections>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: var(--nav-height);
  z-index: 11;
  background-color: rgba(22, 22, 40, 0.85);
  backdrop-filter: blur(0.5rem);
  filter: none !important;
  padding: 0 2.488rem;

  width: 100%;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({ toggleHeader, direction }) =>
      !toggleHeader &&
      direction === 'up' &&
      css`
        height: var(--nav-height);
        box-shadow: 0 0.5rem 1.5rem -0.5rem rgba(22, 22, 40, 0.85);

        transition: all 0.25s ease-in-out cubic-bezier(0.25, 0.46, 0.45, 0.4);


        background-color: rgba(22, 22, 40, 0.6)
        transform: translateY(0rem);
      `}

    ${({ toggleHeader, direction }) =>
      !toggleHeader &&
      direction === 'down' &&
      css`
        height: var(--nav-height);
        transition: all 0.25s ease-in-out cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 0.5rem 1.5rem -0.6rem rgba(22, 22, 40, 0.6)
       
        background-color: rgba(22, 22, 40, 0.8);
        transform: translateY(calc(var(--nav-height) * -1));
      `}
  }

  svg {
    cursor: pointer;
  }
  @media ${device.laptop} {
    padding: 0 3.488rem;
  }
`

const StyledNav = styled.nav`
  ${({
    theme: {
      mixin: { flexBetween },
    },
  }) => flexBetween}
  width: 100%;

  z-index: 12;
`

const DeskTopNavigation = styled.div`
  display: none;
  @media ${device.tablet} {
    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}

    ul {
      ${({
        theme: {
          mixin: { flexBetween },
        },
      }) => flexBetween}

      list-style: none;

      li {
        margin: 0rem 1rem;
      }
      a.nav-link {
        display: inline-block;
       svg{
         margin-right: 0.
       }
      }

      a.nav-text {
        padding: 0.4rem;
        display: inline-block;
        text-decoration: none;
        font-weight: 600;

        color: inherit;
        transition: 0.4s;

        transition: all 0.25 ease-in-out;

        font-size: 0.78rem;

        &:hover {
          color: var(--clr-sky-blue);
        }
      }
    }

    a.resume-link {
      ${({
        theme: {
          mixin: { inlineLink },
        },
      }) => inlineLink}

      font-size: 0.733rem;
      padding: 0.6rem 1rem;

      margin: 0 1rem;
    }
  }
`

const MainNavigation = ({ children }: Props) => {
  const [showHeader, setShowHearder] = useState(true)
  // const [lastscrollY, setlastscrollY] = useState(0)
  const direction = useScrollDirection()
  const prefersReducedMotion = usePrefersReducedMotion()

  const scrollHandler = () => {
    if (typeof window !== 'undefined') {
      setShowHearder(window.pageYOffset < 50)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (prefersReducedMotion) {
        return
      }

      window.addEventListener('scroll', scrollHandler)

      return () => window.removeEventListener('scroll', scrollHandler)
    }
  })
  return (
    <Header toggleHeader={showHeader} direction={direction}>
      <StyledNav>
        <StyleLogo>
          <Link href="/" passHref>
            <a>
              <div>Bilal</div>
            </a>
          </Link>
        </StyleLogo>

        <DeskTopNavigation>
          <NavList />

          <div>
            <a
              href="/resume/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              resume
            </a>
          </div>
        </DeskTopNavigation>

        <Menu />
      </StyledNav>
    </Header>
  )
}

export default MainNavigation
