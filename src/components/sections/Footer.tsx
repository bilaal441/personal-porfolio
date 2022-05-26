import styled from "styled-components"
import Link from "next/link"
import Socials from "./Socials"

const StyledFooter = styled.footer`
  ${({
    theme: {
      mixin: { flexCenter },
    },
  }) => flexCenter}
  text-align: center;
  flex-direction: column;

  text-align: center;

  height: auto;
  min-height: 3.75rem;
  padding: 0.75rem;
  text-align: center;
  gap: 1.2rem;

  .socials {
    width: 100%;
    max-width: 13.5rem;
    margin: 0px auto 0.5rem;
    color: var(--clr-dark-text);
  }

  .project-link {
    font-size: 0.7rem;
    color: var(--clr-dark-text);
    text-align: center;

    transition: all 0.25s ease-in-out;
    &:hover,
    &:focus {
      color: var(--clr-sky-blue);
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="socials">
        <Socials />
      </div>

      <div className="project-link-container">
        <Link href={"https://github.com/bilaal441/personal-porfolio"} passHref>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            className="project-link"
          >
            Designed and Developed by Bilal Sharif. Built with Next.js
            <br />
            typeScript & styled-components. Hosted on Vercel.
          </a>
        </Link>
      </div>
    </StyledFooter>
  )
}

export default Footer
