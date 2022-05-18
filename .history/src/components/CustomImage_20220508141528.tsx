import styled from 'styled-components'
import NextImage from 'next/image'

type props = {
  width: string
  maxWidth: string

  src: string
  alt: string
  layouttype: IntrinsicAttributes
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

const Image = ({ width, maxWidth, src, alt,layouttype }: props) => {
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
      <NextImage src={src} alt={alt} layout={layouttype} className={'image'} />
    </ImageConatiner>
  )
}

export default Image
