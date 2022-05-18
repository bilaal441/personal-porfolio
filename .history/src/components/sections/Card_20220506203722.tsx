import Link from 'next/link'
import Image from 'next/image'
type props = {
  items: []
}

const Card = ({ items }: props) => {
  return (
    <div>
      {items.map(({ name,
        description,
        homepageUrl,
        imageUrl,
        text,
        topics}) => (
        <Link href={} passHref>
          <a>
            <Image href={} height="" />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Card
