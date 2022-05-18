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

const stlyedCard = styled.div`
  ${({
    theme: {
      mixin: { flexBetween },
    },
  }) => flexBetween}
  flex-direction: column;
  text-align: center;
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
    <stlyedCard>
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
        <h3> {name.replaceAll('-', ' ')} </h3>

        <div>
          <p> {description}</p>
        </div>

        <ul>
          {topics.map((topic) => (
            <li key={id}>{topic}</li>
          ))}
        </ul>

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
    </stlyedCard>
  )
}

export default Card
