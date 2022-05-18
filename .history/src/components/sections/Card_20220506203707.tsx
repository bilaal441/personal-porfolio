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
        text: object && object?.text,
        topics}) => (
        <Link href={'https://abdulrahman.id/'} passHref>
          <a>
            <Image href={} height="" />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Card
