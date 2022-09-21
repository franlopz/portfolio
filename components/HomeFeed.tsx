import styles from 'styles/HomeFeed.module.css'

interface Props {
  children: JSX.Element[] | JSX.Element
  title: string
}

const HomeFeed = ({ title, children }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
      <hr />
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default HomeFeed
