import Link from 'next/link'
import Image from 'next/image'
type props = {
  items: []
}

const Card = ({ items }: props) => {
  return (
    <div>
      {items.map(({
        id,
         name,
        description,
        homepageUrl,
        imageUrl,
        text,
        topics,
        url,}) => (
        <Link  key={}href={homepageUrl} passHref>
          <a>
            <Image href={} height="" />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Card
