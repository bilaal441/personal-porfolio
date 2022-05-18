import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
import Link from 'next/link'
import { device } from '../../styles/Breakpoint.style'

import { BsArrowRightShort } from 'react-icons/bs'
const StyleProjectSection = styled.section`
  h1 {
    letter-spacing: -0.01rem;
  }

  max-width: var(--big-max-width);
`



const styledGridConatiner =  styled.div`
  




`





const StyledIndtro = styled.div`
  padding-top: 1rem;

  .inner-intro-heading {
    ${({
      theme: {
        mixin: { flexBetween },
      },
    }) => flexBetween}
    align-items:  flex-start;

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

      font-size: clamp(0.694rem, 1rem, 0.9rem);
    }
  }

  .inner-intro-text {
    margin-top: 0.579rem;
    font-size: clamp(0.6rem, 0.9rem, 1rem);
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`

const Project = () => {
  return (
    <StyleProjectSection id="projects">

<StyledGridConatiner>



      ß
</StyledGridConatiner>
    </StyleProjectSection>
  )
}

export default Project
