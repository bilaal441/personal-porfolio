import { CgVoicemailO } from "react-icons/cg"
import styled from "styled-components"
import { device } from "../../styles/Breakpoint.style"
import { configData } from "../../configUi"

import Link from "next/link"

const StyledContact = styled.section`
  text-align: center;
  max-width: 30rem;
  margin: 0 auto 5rem;

  @media ${device.tablet} {
    margin: 0 auto 2.5rem;
  }

  h2.section-heading {
    font-size: clamp(1.5rem, 1.728rem, 2rem);
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 0.833rem;
    line-height: 1.4;
  }

  a.link-small {
    ${({
      theme: {
        mixin: { inlineLink },
      },
    }) => inlineLink}

    margin-top: 2.5rem;

    font-size: 0.7rem;
    padding: 1rem 1.4rem;
    line-height: 1;
  }
`

const Contact = () => {
  return (
    <StyledContact id="contact">
      <div>
        <h2 className="section-heading">
          <CgVoicemailO className="icon-heading" />
          get In touch
        </h2>

        <p>
          currently looking for any new opportunities for web development . my
          inbox is always open. Feel free to get in touch and talk more about
          your projects.
        </p>

        <Link href={`mailto:${configData.email}`} passHref={true}>
          <a rel="noopener noreferrer" className="link-small">
            drop me email
          </a>
        </Link>
      </div>
    </StyledContact>
  )
}

export default Contact
