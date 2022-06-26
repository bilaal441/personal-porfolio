import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Image from "next/image"
import HeroImage from "../../icons/me.svg"

import { device } from "../../styles/Breakpoint.style"
import Link from "next/link"
import useObserver from "../../Hooks/useObserver"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import usePrefersReducedMotion from "../../Hooks/ usePrefersReducedMotion"
import { configData } from "../../configUi"

const StyleHero = styled.section`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}

  flex-direction: column;
  min-height: 100vh;

  padding-bottom: 10vh;
  max-width: var(--big-max-width);

  @media ${device.tablet} {
    padding: 0;

    /* padding-; */
    flex-direction: row-reverse;
    text-align: left;

    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}
  }
`

const StyleImageContainer = styled.div`
  max-width: clamp(14.5rem, 30vh, 15rem);
  margin-top: 3rem;

  .image-container {
    width: 100%;
    display: block;
  }
  img.image {
    background-color: var(--clr-purple-light);

    clip-path: circle();
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
`

const StyledIntro = styled.div`
  margin-top: 3rem;
  h1 {
    font-size: clamp(0.579rem, 3vw, 1rem);
    color: var(--clr-sky-blue);
    text-transform: capitalize;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--clr-light);
    font-weight: bold;
    line-height: 1.1;
    letter-spacing: -0.065rem;

    @media ${device.tablet} {
      letter-spacing: -0.08rem;
    }
  }

  .big-heading {
    font-size: clamp(2rem, 8vw, 3.488rem);
    text-transform: capitalize;
  }

  a {
    ${({
      theme: {
        mixin: { inlineLink },
      },
    }) => inlineLink}

    margin-top:  2.488rem;

    padding: 1rem 1.728rem;

    font-size: 0.695rem;
  }

  p {
    margin-top: 1.2rem;
    line-height: 1.3;

    max-width: clamp(20rem, 25rem, 30rem);
  }
`

const Hero = () => {
  const { ref, entry } = useObserver()
  const [isLoaded, setIsLoaded] = useState(false)
  const { loarderDelay, navDelay } = configData

  const one = (
    <StyleImageContainer>
      <div className="image-container">
        <Image
          src={HeroImage}
          alt="bilal"
          className="image"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
    </StyleImageContainer>
  )

  const TitleGreating = <h1 key={"titleGreating"}>hi, I&#39;m Bilal Sharif,</h1>
  const Title = (
    <h3 className="big-heading" key={"title"}>
      frontend develover.
    </h3>
  )

  const Text = (
    <p className="big-text" key={"text"}>
      Exploring opportunities and side projects. currently working at royal
      college of surgions.
    </p>
  )
  const CallToAction = (
    <div key={"callToAction"}>
      <Link href={"#projects"}>check out my projects</Link>
    </div>
  )

  const textContent = [TitleGreating, Title, Text, CallToAction]

  const two = (
    <StyledIntro>
      {textContent.map((item) => {
        return item
      })}
    </StyledIntro>
  )

  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const timeout = setTimeout(() => setIsLoaded(true), navDelay)
    return () => clearTimeout(timeout)
  }, [prefersReducedMotion, navDelay])
  const elements = [one, two]

  return (
    <StyleHero
      ref={ref}
      className={` ${entry?.isIntersecting ? "section-active" : ""}`}
    >
      {prefersReducedMotion ? (
        <>
          {elements.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <>
          <TransitionGroup component={null}>
            {isLoaded && (
              <CSSTransition
                classNames="fadeup"
                timeout={loarderDelay}
                key={"image"}
              >
                <div style={{ transitionDelay: `${1}00ms` }}>{one}</div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledIntro>
            <TransitionGroup component={null}>
              {isLoaded &&
                textContent.map((item, i) => (
                  <CSSTransition
                    classNames="fadeup"
                    key={i}
                    timeout={loarderDelay}
                  >
                    <div key={i} style={{ transitionDelay: `${i + 2}00ms` }}>
                      {item}
                    </div>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </StyledIntro>
        </>
      )}
    </StyleHero>
  )
}

export default Hero
