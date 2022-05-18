import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
import Link from 'next/link'
const StyleProjectSection = styled.section`
  h1 {
    letter-spacing: -0.01rem;
  }
`

const StyledIndtro = styled.div``

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
          <h2> all feature work</h2>
        </div>

        <p>some of my projects that I have worked on.</p>

        <Link href="/project">

          
        </Link>
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
