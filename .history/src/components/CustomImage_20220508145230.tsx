import styled from 'styled-components'
import NextImage from 'next/image'
import LayoutValue from 'next/image'
import classes from '../styles/NextImage.module.css'

type props = {
  width: string
  maxWidth: string

  src: string
  alt: string
  layouttype?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
}

const Image = ({ width, maxWidth, src, alt, layouttype }: props) => {
  
 

  return (
    <div style={widths} className={classes.imageContainer}>
      <NextImage
        src={src}
        alt={alt}
        layout={layouttype}
        className={classes.image}
      />
    </div>
  )
}

export default Image
