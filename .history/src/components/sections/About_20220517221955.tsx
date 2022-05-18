import styled from 'styled-components'
import { device } from '../../styles/Breakpoint.style'
import { IoIosContact } from 'react-icons/io'

import {
  SiNextdotjs as NextJs,
  SiStyledcomponents as StyledComponents,
  SiReact as ReactJs,
  SiJavascript as Javascript,
  SiTypescript as Typescript,
} from 'react-icons/si'
import { IconType } from 'react-icons'

const icons = {
  NextJs,
  StyledComponents,
  ReactJs,
  Javascript,
  Typescript,
}

const GetIcon = (iconlabel: keyof typeof icons) => {
  const value: IconType = icons[iconlabel]

  return value
}

const StyleAboutSection = styled.section`
  max-width: var(--big-max-width);

  @media ${device.tablet} {
    .about-inner {
      display: grid;

      grid-template-columns: 3fr 2fr;
      justify-content: space-between;
      gap: 3.488rem;
    }
  }
`

const StyledAboutText = styled.div`
  p {
    margin-bottom: 1rem;
  }
`

const StyledStack = styled.div`
  margin-top: 3rem;

  h3 {
    margin-bottom: 1rem;
  }

  .charts-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    font-size: 0.9rem;
    text-transform: capitalize;
    margin-bottom: 0.35rem;
    display: block;
  }

  footer {
    background-color: var(--clr-navy);
    height: 0.1rem;
  }

  @media ${device.tablet} {
    margin-top: 0rem;
  }
  .chart:nth-child(odd) footer .fill-color {
    background-color: var(--clr-sky-blue);
  }

  .chart:nth-child(even) footer .fill-color {
    background-color: var(--clr-purple-light);
  }

  .chart:nth-child(even) span svg {
    fill: var(--clr-light);
  }

  span svg {
    margin-right: 0.694rem;
  }
`

type props = {
  bio: object[]
  skilss: object[]
}

const AboutSection = ({ bio, skilss }: props) => {
  console.log(skilss)
  return (
    <StyleAboutSection id="about">
      <h1 className="section-heading">
        <span className="icon-heading">
          <IoIosContact />
        </span>
        about me
      </h1>

      <div className="about-inner">
        <StyledAboutText>
          {bio &&
            bio.map((cur: { text?: string }, index) => (
              <p key={index}>{cur.text} </p>
            ))}
        </StyledAboutText>

        <StyledStack>
          <h3 className="subsection-heading"> technologies I’ve work with.</h3>
          <div className="charts-container">
            {skilss &&
              skilss.map((skill: { name?: string }, index) => (
                <div key={index} className="chart">
                   { GetIcon(skill.)}
                  <span>{skill.name}</span>
                  <footer>
                    <div
                      style={{ height: '100%' }}
                      className="js fill-color"
                    ></div>
                  </footer>
                </div>
              ))}
          </div>
        </StyledStack>
      </div>
    </StyleAboutSection>
  )
}

export default AboutSection
