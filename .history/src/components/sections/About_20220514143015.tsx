import styled from 'styled-components'
import { device } from '../../styles/Breakpoint.style'
import { IoIosContact } from 'react-icons/io'

import {
  SiNextdotjs,
  SiStyledcomponents,
  SiReact,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'

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
    /* font-size: 2rem; */
  }
`

const data = [

  {
    name: 'JavaScript',
    progress: '75%',
  },
  {
    name: 'React-Js',
    progress: '75%',
  }


]




const AboutSection = () => {
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
          <p>
            Hi! I'm Bilal, I've been close to a computer since an early age, and
            been passionate about it ever since.
          </p>
          <p>
            I really liked to build stuff using no-code tools back in 2010, and
            from that, I explored how to code myself, fast-forward to today, I
            do programming in various languages and technologies, and had the
            privilege to worked in a B2B Company and a Recruitment Company I'm
            interested in building something awesome with code and automate
            tasks with code, currently focused on Web & Mobile Development, Open
            Source and Competitive Programming
          </p>
          <p>
            When I'm not coding I play games with my friends, watch some show on
            Netflix, or if the weather's good, play basketball! 🏀
          </p>
        </StyledAboutText>

        <StyledStack>
          <h3 className="subsection-heading"> technologies I’ve work with.</h3>
          <div className="charts-container">
            <div className="chart">
              <span>
                <SiJavascript />
                JavaScript
              </span>
              <footer>
                <div style={{ height: '100%' }} className="js fill-color"></div>
              </footer>
            </div>
            <div className="chart">
              <span>
                <SiReact />
                react-js
              </span>
              <footer>
                <div
                  style={{ height: '100%' }}
                  className="react fill-color "
                ></div>
              </footer>
            </div>
            <div className="chart">
              <span>
                <SiNextdotjs />
                next-js
              </span>
              <footer>
                <div
                  style={{ height: '100%' }}
                  className="next fill-color"
                ></div>
              </footer>
            </div>
            <div className="chart">
              <span>
                <SiTypescript />
                typescript
              </span>
              <footer>
                <div
                  style={{ height: '100%' }}
                  className="typescript fill-color"
                ></div>
              </footer>
            </div>
            <div className="chart">
              <span>
                <SiStyledcomponents /> styled-components
              </span>
              <footer>
                <div
                  style={{ height: '100%' }}
                  className="styled-components fill-color"
                ></div>
              </footer>
            </div>
          </div>
        </StyledStack>
      </div>
    </StyleAboutSection>
  )
}

export default AboutSection
