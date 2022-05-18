import Link from 'next/link'
import Image from 'next/image'
type props = {
  name: string
  description: string
  homepageUrl: string
  imageUrl: string
  text: string
  topics: string
  url: string
}
import { repoData } from '../../../interface/index'

const Card = ({
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
      <Link href={homepageUrl} passHref>
        <a>
          <Image src={imageUrl} alt={name} width={'100%'} height={'100%'} />
        </a>
      </Link>
    </div>
  )
}

export default Card