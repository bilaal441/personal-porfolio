type props = {
  width: string
  maxWidth: string
  rest: string
}


const image






const Image = ({ width, maxWidth, ...rest }: props) => {
  let widths = {}
  width ? (widths['width'] = width) : '100%'
  maxWidth ? (widths['maxWidth'] = maxWidth) : '100%'

  return (
    <div className={styles.imageContainer} style={widths}>
      <NextImage className={styles.image} {...rest} />
    </div>
  )
}

export default Image
