import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
import Link from 'next/link'
import { device } from '../../styles/Breakpoint.style'

import { BsArrowRightShort } from 'react-icons/bs'
const StyleProjectSection = styled.section`
  h1 {
    letter-spacing: -0.01rem;
  }
`

const StyledIndtro = styled.div`
  padding-top: 1rem;

  .inner-intro-heading {
    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}

    h1.section-heading {
      margin-bottom: 0rem;
    }
    a {
      display: inline-block;

      color: var(--clr-sky-blue);
      text-transform: capitalize;

      font-size: clamp(0.694rem, 0.7rem, 0.8rem);

      @media ${device.tablet} {
        display: none;
      }
    }
  }

  .out-link {
    display: none;
    @media ${device.tablet} {
      display: inline-block;

      display: inline-block;

      color: var(--clr-sky-blue);
      text-transform: capitalize;

      font-size: clamp(0.694rem, 0.7rem, 0.8rem);
    }
  }


  .inner-intro-text{
    
  }
`

const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <StyledIndtro>
        <div className="inner-intro-heading">
          <h1 className=" section-heading">
            <span className="icon-heading">
              <IoIosCodeWorking />
            </span>
            Projects
          </h1>
          <Link href="/project">
            <a>
              explore more
              <BsArrowRightShort />
            </a>
          </Link>
        </div>

        <p className="inner-intro-text">some of my projects that I have worked on.</p>

        <Link href="/project">
          <a className="out-link">
            explore more
            <BsArrowRightShort />
          </a>
        </Link>
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
