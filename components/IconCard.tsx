import Image from 'next/image'
import { FC, MouseEvent, MutableRefObject, useRef, useState } from 'react'
import styles from 'styles/IconCard.module.css'

interface Props {
  icon: string
  title: string
  alternateIcon: string
}

const IconCard: FC<Props> = ({ icon, title, alternateIcon }) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isMouseOver, setIsMouseOver] = useState(false)

  const onMouseMoveHandler = (e: MouseEvent) => {
    const width = ref.current.clientWidth
    const height = ref.current.clientHeight
    const halfWidth = width / 2
    const halfHeight = height / 2
    const { offsetX, offsetY } = e.nativeEvent
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 15
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 15
    setRotation({ x: rotationX, y: rotationY })
  }

  const onMouseLeaveHandler = () => {
    setRotation({ x: 0, y: 0 })
    setIsMouseOver(false)
  }

  return (
    <div
      className={styles.container}
      ref={ref}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseMove={(e) => onMouseMoveHandler(e)}
      onMouseLeave={() => onMouseLeaveHandler()}
    >
      <div
        style={{
          visibility: isMouseOver ? 'visible' : 'hidden',
          height: '0'
        }}
      >
        <Image
          className={styles.image}
          src={alternateIcon}
          height="100%"
          width="100%"
          alt={title}
        />
      </div>
      <div
        style={{
          visibility: isMouseOver ? 'hidden' : 'visible'
        }}
      >
        <Image
          className={styles.image}
          src={icon}
          height="100%"
          width="100%"
          alt={title}
        />
      </div>

      {isMouseOver ? <div className={styles.tooltip}>{title}</div> : null}
    </div>
  )
}

export default IconCard
