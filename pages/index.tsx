import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from 'components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Francisco Lopez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <Header />
        <main className={styles.main}></main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  )
}

export default Home
