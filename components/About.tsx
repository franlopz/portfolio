import Image from 'next/image'
import styles from 'styles/About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles['text-container']}>
        <div className={styles.title}>
          <h1>Hey there,</h1>
          <h1>I&apos;m Francisco 👋</h1>
        </div>
        <div className={styles.announcement}>
          <p>
            I&apos;m a web developer, specialized in react, solving problems and
            undestanding customer needs.
          </p>
        </div>
      </div>
      <div className={styles.picture}>
        <Image
          priority={true}
          src="/web-developer.svg"
          layout="responsive"
          width={500}
          height={500}
          alt="FJLP"
        />
      </div>
    </section>
  )
}

export default About
