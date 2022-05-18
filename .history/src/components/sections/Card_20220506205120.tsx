import Link from 'next/link'
import Image from 'next/image'
type props = {
  items: []
}
import { repoData } from '../../../interface/'

const Card = ({ items }: props) => {
  return (
    <div>

      
      { items &&items?.map(({
        id,
         name,
        description,
        homepageUrl,
        imageUrl,
        text,
        topics,
        url,}) => (
        <Link  key={id}href={homepageUrl} passHref >
          <a>
            <Image href={homepageUrl}  alt={name} width={'100%'} height={'100%'} />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Card
