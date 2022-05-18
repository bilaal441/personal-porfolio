import styled from 'styled-components'
import NextImage from 'next/image'

type props = {
  width: string
  maxWidth: string
  rest: {
    src: string
    alt: string
    layout: string
 
  }
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

const Image = ({ width, maxWidth, ...rest }: props) => {
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
      <NextImage className={'image'} {...rest} />
    </ImageConatiner>
  )
}

export default Image
