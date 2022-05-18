import Link from 'next/link'
import Image from 'next/image'
type props = {
  featureProjects: {}

}
import { repoData } from '../../../interface/index'

const Card = ({
  id,
  name,
  description,
  homepageUrl,
  imageUrl,
  text,
  topics,
  url,
}: fe props) => {
  return (
    <div>
      <Link key={id} href={homepageUrl} passHref>
        <a>
          <Image src={imageUrl} alt={name} width={'100%'} height={'100%'} />
        </a>
      </Link>
    </div>
  )
}

export default Card
