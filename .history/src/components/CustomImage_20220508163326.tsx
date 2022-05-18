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
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <NextImage
        src={src}
        alt={alt}
        objectFit={'cover'}
        layout={layouttype}
        height=
        width={'640px'}
      />
    </div>
  )
}

export default Image
