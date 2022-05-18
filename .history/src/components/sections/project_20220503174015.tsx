import styled from 'styled-components'
import { IoIosCodeWorking } from 'react-icons/io'
const StyleProjectSection = styled.section``

const Project = () => {
  return (
    <StyleProjectSection id="projects">
      <h1 className=" section-heading">
        <span className=''>
          <IoIosCodeWorking/>
        </span>
        Projects
        
        </h1>
    </StyleProjectSection>
  )
}

export default Project
