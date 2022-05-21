import Link from 'next/link'

import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import CustomImage from '../CustomImage'
import styled from 'styled-components'
import { device } from '../../styles/Breakpoint.style'

type props = {
  name: string
  description: string
  homepageUrl: string
  imageUrl: string
  text: string
  topics: []
  url: string
  id: string
  index: number
}

const StyedCard = styled.div`
  border: 1px solid var(--clr-navy);
  border-radius: 0.5rem 0.5rem;

  box-shadow: rgba(68, 68, 110, 0.2) 0px 8px 24px;

  @media ${device.tablet} {
    border: none;
    border-radius: none;
  }
`
const StyedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.833rem;
  font-size: 0.7rem;
  text-transform: capitalize;

  li {
    margin: 0rem 0.579rem 0.279rem 0rem;
    color: var(--clr-purple-light);
  }
`

const StyledIntro = styled.div`
  ${({
    theme: {
      mixin: { flexBetween },
    },
  }) => flexBetween}

  .repo-links a {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .repo-link {
    width: 1.2rem;
    height: 1.2rem;
    transition: var();

    color: var(--clr-dark-text) !important;
    &:hover {
      color: var(--clr-sky-blue) !important;
    }
  }
`

const StyleImage = styled.div`
  position: relative;
  z-index: 1;
  .image-link {
    width: 100%;
    height: 100%;
    background-color: var(--clr-light-sky-blue);
    border-radius: var(--border-radiusCard);

    vertical-align: middle;
    display: inline-block;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--clr-navy-dark);
      mix-blend-mode: screen;
    }

    .img {
      border-radius: var(--border-radiusCard);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
    }
  }
`
const StyledContentText = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 0.833rem;
  padding-inline-end: 0.6rem;
  padding-inline-start: 0.6rem;
`

const Card = ({
  id,
  name,
  description,
  homepageUrl,
  imageUrl,
  text,
  topics,
  url,
  index,
}: props) => {
  return (
    <StyedCard className={`repo-${index}`}>
      <StyleImage>
        <Link href={homepageUrl} passHref>
          <a target="_blank" className="image-link">
            <CustomImage
              src={imageUrl}
              alt={name}
              layouttype={'fill'}
              width="100%"
              objectFit="contain"
              style={'img '}
            />
          </a>
        </Link>
      </StyleImage>

      <StyledContentText>
        <StyledIntro>
          <h3 className="subsection-heading"> {name.replaceAll('-', ' ')} </h3>

          <div className="repo-links">
            <Link href={url} passHref>
              <a target="_blank">
                <RiGithubLine title={name} className="repo-link" />
              </a>
            </Link>

            <Link href={homepageUrl} passHref>
              <a target="_blank">
                <FiExternalLink title="github" className="repo-link" />
              </a>
            </Link>
          </div>
        </StyledIntro>

        <div className="repo-description">
          <p> {description}</p>
        </div>

        <StyedList>
          {topics ? (
            topics.map((topic) => <li key={topic}>{topic}</li>)
          ) : (
            <li>error accured</li>
          )}
        </StyedList>
      </StyledContentText>
    </StyedCard>
  )
}

export default Card
