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
padding-top: 

`

const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <h1 className=" section-heading">
        <span className="icon-heading">
          <IoIosCodeWorking />
        </span>
        Projects
      </h1>

      <StyledIndtro>
        <div>
          <h3 className="subsection-heading"> all feature work</h3>
        </div>

        <p className="">some of my projects that I have worked on.</p>

        <Link href="/project">
          <>
            <a>explore more</a>
            <BsArrowRightShort />
          </>
        </Link>
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
