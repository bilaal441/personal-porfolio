import Link from 'next/link'

import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import CustomImage from '../CustomImage'
import styled from 'styled-components'

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

const StyedCard = styled.div``
const StyedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0rem;
  font-size: 0.7rem;
  text-transform: capitalize;

  li {
    margin: 0rem 0.579rem 0.279rem 0rem;
  }
`

const St

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

      <div>
        <div>
          <h3> {name.replaceAll('-', ' ')} </h3>

          <div>
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
        </div>

        <div>
          <p> {description}</p>
        </div>

        <StyedList>
          {topics.map((topic) => (
            <li key={id}>{topic}</li>
          ))}
        </StyedList>
      </div>
    </StyedCard>
  )
}

export default Card
