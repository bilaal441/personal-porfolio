import Link from 'next/link'
import Image from 'next/image'
type props = {
  featureProjects: object[]
}
import { repoData } from '../../../interface/index'

const Card = ({ items }: props) => {
  console.log(items)
  return (
    <div>
      {items &&
        items?.map(
          ({
            id,
            name,
            description,
            homepageUrl,
            imageUrl,
            text,
            topics,
            url,
          }) => (
            <Link key={id} href={homepageUrl} passHref>
              <a>
                <Image
                  src={homepageUrl}
                  alt={name}
                  width={'100%'}
                  height={'100%'}
                />
              </a>
            </Link>
          ),
        )}
    </div>
  )
}

export default Card
