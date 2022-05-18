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
`

const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <StyledIndtro>
        <h1 className=" section-heading">
          <span className="icon-heading">
            <IoIosCodeWorking />
          </span>
          Projects
        </h1>
        <p className="">some of my projects that I have worked on.</p>

       
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
