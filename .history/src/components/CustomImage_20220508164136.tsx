import styled from 'styled-components'
import NextImage from 'next/image'
import LayoutValue from 'next/image'
import classes from '../styles/NextImage.module.css'

type props = {
  width: string
  objectFit?: string
  src: string
  alt: string
  layouttype?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
}

const Image = ({ width, src, alt, layouttype, objectFit }: props) => {
  return (
    <div>
      <NextImage
        src={src}
        alt={alt}
        objectFit={objectFit}
        layout={layouttype}
        height="100%"
        width="100%"
      />
    </div>
  )
}

export default Image
