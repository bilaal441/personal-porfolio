import styled from 'styled-components'

type props = {
  width: string
  maxWidth: string
  rest: string
}

const imageConatiner = styled.div`
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
  } = {
    widt: '',
  }
  width ? (widths['width'] = width) : '100%'
  maxWidth ? (widths['maxWidth'] = maxWidth) : '100%'

  return (
    <div className={styles.imageContainer} style={widths}>
      <NextImage className={styles.image} {...rest} />
    </div>
  )
}

export default Image
