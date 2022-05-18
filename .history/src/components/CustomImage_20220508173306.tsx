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
    <div
     className={classes['unset-img']}
    >
      <NextImage
        src={src}
        alt={alt}
        className
        layout={layouttype}
      
      />
    </div>
  )
}

export default Image