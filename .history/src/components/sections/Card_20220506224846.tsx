import Link from 'next/link'
import Image from 'next/image'
type props = {
  featureProjects: []
}
import { repoData } from '../../../interface/index'

const Card = ({ featureProjects }: props) => {
  console.log(featureProjects)
  return (
    <div>
     
      <Link key={id} href={homepageUrl} passHref>
              <a>
                <Image
                  src={imageUrl}
                  alt={name}
                  width={'100%'}
                  height={'100%'}
                />
              </a>
              </
        
    </div>
  )
}

export default Card