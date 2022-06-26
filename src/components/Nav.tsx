import Link from "next/link"

import { StyleLogo } from "../styles/styledHeader"

import React, { useState, useEffect, useContext } from "react"
import NavList from "./NavList"
import Menu from "./Menu"
import styled from "styled-components"
import { scrolltDirections } from "../../interface"
import { css } from "styled-components"

import usePrefersReducedMotion from "../Hooks/ usePrefersReducedMotion"

import { device } from "../styles/Breakpoint.style"

import { useScrollDirection } from "../Hooks/ useScrollDirection "

import { configData } from "../configUi"
import Logo from "../icons/logo"
import { useRouter } from "next/router"

import { TransitionGroup, CSSTransition } from "react-transition-group"
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
      direction === "up" &&
      css`
        height: var(--nav-height);
        box-shadow: 0 0.5rem 1.5rem -0.5rem rgba(22, 22, 40, 0.85);

        transition: var(--transition) cubic-bezier(0.25, 0.46, 0.45, 0.4);

        background-color: rgba(22, 22, 40, 0.6);
        transform: translateY(0rem);
      `}

    ${({ toggleHeader, direction }) =>
      !toggleHeader &&
      direction === "down" &&
      css`
        height: var(--nav-height);
        transition: var( --transition) cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
      gap: 1rem;

      a.nav-link {
        display: inline-block;
        padding: 0.5rem;

        svg {
          margin-right: 0.5rem;
          width: 1rem;
          height: 1rem;
        }
      }

      span.nav-text {
        display: inline-block;
        text-decoration: none;

        color: var(--clr-light);

        transition: 0.4s;

        transition: all 0.25 ease-in-out;

        font-size: 0.7rem;

        &:hover {
          color: var(--clr-sky-blue);
        }
      }

      span.active {
        color: var(--clr-sky-blue);
      }
    }

    a.resume-link {
      ${({
        theme: {
          mixin: { inlineLink },
        },
      }) => inlineLink}

      font-size: 0.62rem;
      padding: 0.6rem 0.8rem;
      line-height: 1.1;
      margin-left: 1rem;
      object-fit: m;
    }
  }
`

const MainNavigation = () => {
  const [showHeader, setShowHearder] = useState(true)
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(router.asPath !== "/")

  const direction = useScrollDirection()
  const prefersReducedMotion = usePrefersReducedMotion()

  const { navLinks, loarderDelay, navDelay } = configData

  const scrollHandler = () => {
    if (typeof window !== "undefined") {
      setShowHearder(window.pageYOffset < 50)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (prefersReducedMotion) {
        return
      }

      window.addEventListener("scroll", scrollHandler)

      const timeout = setTimeout(() => {
        setIsMounted(true)
      }, 100)

      return () => {
        window.removeEventListener("scroll", scrollHandler)
        clearTimeout(timeout)
      }
    }
  }, [prefersReducedMotion])
  const timeout = isMounted ? loarderDelay : 0
  
  const fade = isMounted ? "fade" : ""

  const fadeDown = isMounted ? "fadedown" : ""
  const LogoJsx = (
    <StyleLogo>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
    </StyleLogo>
  )
  const RusumeLink = (
    <a
      href="/resume/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-link"
    >
      resume
    </a>
  )

  return (
    <Header toggleHeader={showHeader} direction={direction}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {LogoJsx}

            <DeskTopNavigation>
              <ul>
                {navLinks.map(({ name, url, Icon }) => (
                  <NavList
                    key={name}
                    name={name}
                    url={url}
                    Icon={Icon}
                    styleCss={{}}
                  />
                ))}
              </ul>
              <div>{RusumeLink}</div>
            </DeskTopNavigation>

            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fade} timeout={timeout}>
                  {LogoJsx}
                </CSSTransition>
              )}
            </TransitionGroup>

            <DeskTopNavigation>
              <ul>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ name, url, Icon }, i) => (
                      <CSSTransition
                        key={i}
                        classNames={fadeDown}
                        timeout={timeout}
                      >
                        <NavList
                          key={name}
                          name={name}
                          url={url}
                          Icon={Icon}
                          styleCss={{
                            transitionDelay: `${isMounted ? i * 100 : 0}ms`,
                          }}
                        />
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ul>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDown} timeout={timeout}>
                    <div
                      style={{
                        transitionDelay: `${
                          isMounted ? navLinks.length * 100 : 0
                        }ms`,
                      }}
                    >
                      {RusumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </DeskTopNavigation>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDown} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </Header>
  )
}

export default MainNavigation
