import Image from 'next/image'
import styles from 'styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Hey there,</h1>
        <h1>I&apos;m Francisco</h1>
      </div>
      <div className={styles.announcement}>
        <p>
          I&apos;m a web developer, specialized in react, solving problems and
          undestanding customer needs.
        </p>
      </div>
      <div className={styles.picture}>
        <Image
          src="https://fjlpbucket.s3.us-east-2.amazonaws.com/personalPhoto.webp"
          layout="responsive"
          sizes="(max-width: 640px) 80px, 60px"
          width={200}
          height={240}
          alt="FJLP"
        />
      </div>
    </div>
  )
}

export default About
