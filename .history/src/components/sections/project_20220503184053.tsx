import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
const StyleProjectSection = styled.section`
  h1 {
    letter-spacing: -0.01rem;
  }
`

const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <div>
        <h1 className=" section-heading">
          <span className="icon-heading">
            <IoIosCodeWorking />
          </span>
          Projects
        </h1>

        <p>some of my projects that I have worked on.</p>

        lin

      </div>
    </StyleProjectSection>
  )
}

export default Project
