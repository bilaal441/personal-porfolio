import Link from 'next/link'

import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import CustomImage from '../CustomImage'
import styled from 'styled-components'
import {device} from '../'

type props = {
  name: string
  description: string
  homepageUrl: string
  imageUrl: string
  text: string
  topics: []
  url: string
  id: string
}

const StyedCard = styled.div`
  border: 1px solid var(--clr-navy);
  border-radius: 0.5rem 0.5rem;

  box-shadow: rgba(68, 68, 110, 0.2) 0px 8px 24px;

  @media ${device.tablet} {


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
    svg {
      width: 1.2rem;
      height: 1.2rem;
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
}: props) => {
  return (
    <StyedCard>
      <div>
        <Link href={homepageUrl} passHref>
          <a target="_blank">
            <CustomImage
              src={imageUrl}
              alt={name}
              layouttype={'fill'}
              width="100%"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>

      <StyledContentText>
        <StyledIntro>
          <h3 className="subsection-heading"> {name.replaceAll('-', ' ')} </h3>

          <div className="repo-links">
            <Link href={url} passHref>
              <a target="_blank">
                <RiGithubLine />
              </a>
            </Link>

            <Link href={homepageUrl} passHref>
              <a target="_blank">
                <FiExternalLink title="github" />
              </a>
            </Link>
          </div>
        </StyledIntro>

        <div className="repo-description">
          <p> {description}</p>
        </div>

        <StyedList>
          {topics.map((topic) => (
            <li key={id}>{topic}</li>
          ))}
        </StyedList>
      </StyledContentText>
    </StyedCard>
  )
}

export default Card
