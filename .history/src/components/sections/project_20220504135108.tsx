import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
import Link from 'next/link'

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

      font-size: calmp(0.694rem,  ,0.8rem);
    }
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
              {' '}
              explore more
              <BsArrowRightShort />
            </a>
          </Link>
        </div>
        {/* 
        <p className="">some of my projects that I have worked on.</p>

        <Link href="/project">
          <>
            <a>explore more</a>
            <BsArrowRightShort />
          </>
        </Link> */}
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
