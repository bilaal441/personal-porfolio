import styled from 'styled-components'
import { device } from '../styles/Breakpoint.style'
import { useRef, useContext, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import Navlist from './NavList'

import useOnclickOutside from '../Hooks/useOnClickOutside'
import { UiContext } from '../store/isActiveContext'
import link from 'next/link'

// import cv from '../Documents/cv.pdf'

type active = {
  isActive: boolean
}

const MenuContainer = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`

const Hamburger = styled.button<active>`
  display: block;
  position: relative;
  z-index: 11;
  user-select: none;
  appearance: none;
  outline: none;
  background: none;
  cursor: pointer;
  border: none;

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: var(--clr-sky-blue);
    border-radius: 6px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;

    &:nth-child(3) {
      transform: ${(props) =>
        props.isActive && ` translate(-3px, 3px) rotate(-45deg)`};
    }

    &:nth-child(2) {
      opacity: ${(props) => props.isActive && '0'};
      transform: ${(props) => props.isActive && 'translateX(15px)'};
    }

    &:nth-child(1) {
      transform: ${(props) =>
        props.isActive && 'translate(0px, -2px) rotate(45deg)'};
    }
  }

  &:hover span:nth-child(2) {
    transform: translateX(10px);
    background-color: var(--clr-purple);
  }

  @media ${device.tablet} {
    display: none;
  }
`

const Aside = styled.aside<{ isActive: boolean }>`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(65vw, 400px);
  padding: 1rem 0;
  transition: all 0.5s ease-in-out;
  background-color: var(--clr-navy-dark);
  height: 100vh;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};

  transform: ${({ isActive }) =>
    isActive ? 'translateX(0)' : 'translateX(100vh)'};

  nav {
    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  ul {
    flex-direction: column;
    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}

    list-style: none;
    width: 100%;

    li {
      margin: 0 auto 0.9rem;
    }
    a {
      display: inline-block;
      text-decoration: none;
      font-weight: 600;
      color: var(--clr-light);
      transition: 0.4s;
      padding: 0.162rem 1rem 1rem;
      font-size: 0.9rem;
      transition: all 0.25 ease-in-out;
      

      ${({
        theme: {
          mixin: { flexBetween },
        },
      }) => flexBetween}
      flex-direction: column;

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

    font-size:   0.74rem;
    padding: 0.9rem 2.5rem;
    margin: 10% auto 0;
    width: max-content;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const Menu = () => {
  const { isActive, toggleIsActive, setManuIsActive } = useContext(UiContext)
  const menuRef = useRef<HTMLDivElement>(null)
  useOnclickOutside(menuRef, () => setManuIsActive(false))

  const onResizeHandler = (e: Event) => {
    const target = e.target as Window

    if (target.innerWidth > 768) {
      setManuIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  })
  return (
    <MenuContainer ref={menuRef}>
      <Helmet>
        <body className={isActive ? 'blur' : ''} />
      </Helmet>

      <Hamburger isActive={isActive} onClick={toggleIsActive}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Aside isActive={isActive}>
        <nav>
          <Navlist />

          <a
            href="/resume/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            resume
          </a>
        </nav>
      </Aside>
    </MenuContainer>
  )
}

export default Menu
