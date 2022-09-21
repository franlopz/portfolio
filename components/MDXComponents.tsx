import Image, { ImageProps } from 'next/image'

const components = {
  Img: (props: ImageProps) => (
    <div style={{ width: '100%' }}>
      <Image {...props} layout="responsive" loading="lazy" />
    </div>
  )
}

export default components
