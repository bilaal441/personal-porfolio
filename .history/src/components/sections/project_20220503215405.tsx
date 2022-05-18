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
      <div>


        
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
