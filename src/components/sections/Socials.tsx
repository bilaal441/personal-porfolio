import { configData } from "../../configUi"
import Link from "next/link"
import styled from "styled-components"

const StyledSocial = styled.ul`
  ${({
    theme: {
      mixin: { flexBetween },
    },
  }) => flexBetween}

  padding: 0rem;
  margin: 0;

  .social-icon {
    svg {
      width: 1.2rem;
      height: 1.2rem;
      color: var(--clr-dark-text) !important;
      transition: var(--transition);
      &:hover {
        color: var(--clr-light-sky-blue) !important;
      }
    }
  }
`

const Socials = () => {
  const { socialMedia } = configData

  return (
    <StyledSocial>
      {socialMedia.map((social) => (
        <li key={social.name}>
          <Link href={social.url}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {<social.icon className="social-icon-svg" />}
            </a>
          </Link>
        </li>
      ))}
    </StyledSocial>
  )
}

export default Socials
