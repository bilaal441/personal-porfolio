import Link from 'next/link'
import Image from 'next/image'
import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import CustomImage from '../CustomImage'
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
    <div>
      <div>
        <Link href={homepageUrl} passHref>
          <a
            target="_blank"
            style={{
              display: 'block',
            }}
          >
            <CustomImage
              src: imageUrl, alt: name,
              
              layout: 'fill' 
              maxWidth={'100%'}
              width="100%"
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
    </div>
  )
}

export default Card
