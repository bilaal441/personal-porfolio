import styled from 'styled-components'
import NextImage from 'next/image'
import LayoutValue from 'next/image'

type props = {
  width: string
  maxWidth: string

  src: string
  alt: string
  layouttype?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
}



const Image = ({ width, maxWidth, src, alt, layouttype }: props) => {
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
    <div style={widths}>
      <NextImage src={src} alt={alt} layout={layouttype} className={'image'} />
    </div>
  )
}

export default Image
