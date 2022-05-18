import Link from 'next/link'
import Image from 'next/image'
type props = {
  name: string
  description: string
  homepageUrl: string
  imageUrl: string
  text: string
  topics: []
  url: string
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
        <h3> {name} </h3>

        <ul>
          {topics.map((el) => (
            <li key={}></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card
