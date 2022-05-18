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

const StyedCard = styled.div`
  

  .card-list {
    display: flex;
    flex-wrap: wrap;
  }
   
   
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

      <div>
        <h3> {name.replaceAll('-', ' ')} </h3>

        <div>
          <p> {description}</p>
        </div>

        <ul className="card-list">
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
    </StyedCard>
  )
}

export default Card
