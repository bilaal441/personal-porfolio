import styled from 'styled-components'
import NextImage from 'next/image'
import Layout from './layout/Layout'

type props = {
  width: string
  maxWidth: string

  src: string
  alt: string
  layout?: string
}

const ImageConatiner = styled.div`
  position: unset !important;

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

const Image = ({ width, maxWidth }: props) => {
  let widths: {
    width: string
    maxWidth: string
  } = {
    width: '',
    maxWidth: '',
  }
  width ? (widths['width'] = width) : '100%'
  maxWidth ? (widths['maxWidth'] = maxWidth) : '100%'

  return (
    <ImageConatiner style={widths}>
      <NextImage    src={src}
  alt={alt}
  layout={Layout} string className={'image'} />
    </ImageConatiner>
  )
}

export default Image
