import styles from 'styles/CardsContainer.module.css'

interface Props {
  children: JSX.Element[]
  title: string
  description?: string
}
const CardsContainer = ({ children, title, description }: Props) => {
  return (
    <section id={title.toLocaleLowerCase()} className={styles.container}>
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
      <div className={styles['grid-cards']}>{children}</div>
    </section>
  )
}

export default CardsContainer
