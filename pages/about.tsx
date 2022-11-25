import Layout from 'components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/aboutPage.module.css'

const About = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>About me</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
              I am a web developer specializing in React, I have experience
              programming with JavaScript, TypeScript, Node.js and FastAPI. My
              biggest passion is to solve problems by using the right technology
              tools. I like software and hardware.
            </p>
            <p>
              I can understand customer&apos;s needs in order to give them the
              right solution, by analyzing and making the right decision.
              I&apos;m ready to take new challenges.
            </p>
            <p>
              I describe myself in three words: Persistent, empathic, and
              dynamic.
            </p>
          </span>
        </section>
      </div>
    </Layout>
  )
}

export default About
