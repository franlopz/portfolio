import Layout from 'components/Layout'
import Image from 'next/image'
import styles from 'styles/aboutPage.module.css'

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <section className={styles.section}>
          <div className={styles['image-container']}>
            <Image
              src="https://fjlpbucket.s3.us-east-2.amazonaws.com/me.webp"
              alt="Francisco Lopez"
              layout="responsive"
              height="50"
              width="50"
            />
          </div>
          <span className={styles.info}>
            <p>
              Hi, I am Francisco Lopez, an Industrial Engineer, currently living
              in El Salvador
            </p>
            <p>
              I am a web developer specialized in React, I have experience
              programming with JavaScript, TypeScript, Node.js and FastAPI. My
              biggest passion is to solve problems by using the right
              techonology tools. I like software and hardware.
            </p>
            <p>
              I am able to understand customer&apos;s needs in order give them
              the right solution, by analizing and making the right decision.
              I&apos;m ready to take new challanges.
            </p>
            <p>
              I describe myself in three words: Persistent, empathic, dynamic.
            </p>
          </span>
        </section>
      </div>
    </Layout>
  )
}

export default About
