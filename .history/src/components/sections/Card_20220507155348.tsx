import Link from 'next/link'
import Image from 'next/image'
import { VscGithubAlt } from 'react-icons/vsc'
import {FiExternalLink} from 're'
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
          <a target="_blank">
            <Image src={imageUrl} alt={name} width={'100%'} height={'100%'} />
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
              <VscGithubAlt />
            </a>
          </Link>

          <Link href={homepageUrl} passHref>
            <a target="_blank">
              <VscGithubAlt title='github' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
