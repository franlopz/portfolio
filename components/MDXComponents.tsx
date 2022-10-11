import Image, { ImageProps } from 'next/image'

const components = {
  Img: (props: ImageProps) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image {...props} loading="lazy" />
    </div>
  )
}

export default components
