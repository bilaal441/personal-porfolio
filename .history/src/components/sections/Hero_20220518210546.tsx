import { ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import HeroImage from '../../icons/me.svg'

import { device } from '../../styles/Breakpoint.style'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const StyleHero = styled.section`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}

  flex-direction: column;
  min-height: 100vh;

  max-width: var(--big-max-width);

  @media ${device.tablet} {
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

const Hero = ({ children }: Props) => {
  return (
    <StyleHero>
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
      <StyledIntro>
        <h1>hi &#39 Bilal Sharif,</h1>

        <h3 className="big-heading">frontend develover.</h3>

        <p className='big-text'>
          Exploring opportunities and side projects. currently working at royal
          college of surgions.
        </p>

        <div>
          <Link href={'/projects'}> check out my projects</Link>
        </div>
      </StyledIntro>
    </StyleHero>
  )
}

export default Hero
