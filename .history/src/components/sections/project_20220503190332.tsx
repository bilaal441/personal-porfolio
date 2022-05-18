import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
import Link from 'next/link'
const StyleProjectSection = styled.section`
  h1 {
    letter-spacing: -0.01rem;
  }
`

const StyledIndtro = styled.div`
  



`



const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <StyledIndtro>
      

        <p>some of my projects that I have worked on.</p>

        <Link href="/project">explore more</Link>
      </StyledIndtro>
    </StyleProjectSection>
  )
}

export default Project
