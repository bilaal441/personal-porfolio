import styled from "styled-components"
import { device } from "../styles/Breakpoint.style"
import React, {
  useRef,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react"

import { Helmet } from "react-helmet"
import NavList from "./NavList"

import useOnclickOutside from "../Hooks/useOnClickOutside"
import { UiContext } from "../store/isActiveContext"

import { configData } from "../configUi"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import usePrefersReducedMotion from "../Hooks/ usePrefersReducedMotion"

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
      opacity: ${(props) => props.isActive && "0"};
      transform: ${(props) => props.isActive && "translateX(15px)"};
    }

    &:nth-child(1) {
      transform: ${(props) =>
        props.isActive && "translate(0px, -2px) rotate(45deg)"};
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

const Aside = styled.aside`
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
      font-size: 0.8rem;
      transition: all 0.25 ease-in-out;

      ${({
        theme: {
          mixin: { flexBetween },
        },
      }) => flexBetween}
      flex-direction: column;
      gap: 0.4rem;

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

  const [isparentMounted, setIsparentMounted] = useState(false)

  const onResizeHandler = useCallback(
    (e: Event) => {
      const target = e.target as Window

      if (target.innerWidth > 768) {
        setManuIsActive(false)
      }
    },

    [setManuIsActive],
  )
  const prefersReducedMotion = usePrefersReducedMotion()
  useEffect(() => {
    window.addEventListener("resize", onResizeHandler)

    if (isActive) setIsparentMounted(true)
    return () => {
      window.removeEventListener("resize", onResizeHandler)
      setIsparentMounted(false)
    }
  }, [onResizeHandler, isActive])
  const { navLinks } = configData

  const fadeDown = isparentMounted ? "fadedown" : ""
  const timeout = isparentMounted ? 300 : 0
  return (
    <MenuContainer ref={menuRef}>
      <Helmet>
        <body className={isActive ? "blur" : ""} />
      </Helmet>

      <Hamburger isActive={isActive} onClick={toggleIsActive}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <CSSTransition
        timeout={timeout}
        classNames="aside"
        key={"is"}
        mountOnEnter
        unmountOnExit
        in={isActive}
      >
        <>
          <Aside>
            <nav>
              <ul>
                {prefersReducedMotion
                  ? navLinks.map(({ name, url, Icon }, i) => (
                      <NavList
                        key={i}
                        name={name}
                        url={url}
                        Icon={Icon}
                        styleCss={{}}
                      />
                    ))
                  : navLinks.map(({ name, url, Icon }, i) => (
                      <CSSTransition
                        classNames={fadeDown}
                        timeout={timeout}
                        key={i}
                        in={isparentMounted}
                        mountOnEnter
                      >
                        <NavList
                          key={i}
                          name={name}
                          url={url}
                          Icon={Icon}
                          styleCss={{
                            transitionDelay: `${i + 1}00ms`,
                          }}
                        />
                      </CSSTransition>
                    ))}
              </ul>
              {prefersReducedMotion ? (
                <a
                  href="/resume/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-link"
                >
                  resume
                </a>
              ) : (
                <CSSTransition
                  classNames={fadeDown}
                  timeout={timeout}
                  in={isparentMounted}
                  mountOnEnter
                >
                  <a
                    href="/resume/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                    style={{
                      transitionDelay: `${navLinks.length + 1}00ms`,
                    }}
                  >
                    resume
                  </a>
                </CSSTransition>
              )}
            </nav>
          </Aside>
        </>
      </CSSTransition>
    </MenuContainer>
  )
}

export default React.memo(Menu)
