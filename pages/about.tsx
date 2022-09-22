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
              I am a web developer specialized in React, learning and building
              projects since 2020. I have always been a tech guy, when I was 14
              years old I discovered web development in an online forum, I tried
              to get a course to learn but I did not have a credit card and I
              lost the interest to learn web development.
            </p>
            <p>
              Fortunately, in 2015, I started to work in a restaurant and I
              figured out that we needed a Point Of Sale to improve our
              productivity. That was the first problem/improvement I solve with
              my tech skills.
            </p>
            <p>
              I was looking for a flexible, reliable and friendly POS, I tested
              like 10 POS systems and fortunately I found the right one. It has
              an automation module to create personalized actions with no-code
              tools and a feature to write scripts with ECMAScript 3, at the
              beginning, I did not know how to write code and I was copying and
              pasting code.
            </p>
            <p>
              Perseverance and passion were the keys to keeping me on this
              journey, I started to understand and learn the language syntaxis,
              methods, and how to write code, I automated tasks with python
              scripts and I detected needs that leads me to develop projects.
            </p>
            <p>
              Right now I am looking for new challenges in order to grow as a
              proffessional and as a human being. I think that great people
              never stop learning, and that is what I want in my life.
            </p>
          </span>
        </section>
      </div>
    </Layout>
  )
}

export default About
