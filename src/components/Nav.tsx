import Link from 'next/link'
import Image from 'next/image'

import { Header, StyleLogo } from '../styles/styledHeader'
import Logo from '../../imgs/logo.png'

import React, { useState, ReactNode } from 'react'
import NavList from './NavList'
import Menu from './Menu'
import styled from 'styled-components'

import { device, desktopApp } from '../styles/Breakpoint.style'
type Props = {
  children?: ReactNode
}

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
      a {
        display: inline-block;
        text-decoration: none;
        font-weight: 600;

        color: inherit;
        transition: 0.4s;
        padding: 0.694rem;
        font-size: 0.78rem;
        transition: all 0.25 ease-in-out;

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
  return (
    <Header>
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
