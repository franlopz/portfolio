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
          src="https://fjlpbucket.s3.us-east-2.amazonaws.com/personalPhoto.webp"
          layout="responsive"
          width={200}
          height={240}
          alt="FJLP"
        />
      </div>
    </section>
  )
}

export default About
