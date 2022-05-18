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
    <div className={classes.custom}>
      <NextImage
        
        src={src}
        alt={alt}
        height="100%"
        width={width}
        layout={layouttype}
        objectFit="contain"
      />
    </div>
  )
}

export default Image
