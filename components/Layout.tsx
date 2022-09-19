import { FC } from 'react'
import Header from './Header'
import styles from 'styles/Layout.module.css'
import Footer from './Footer'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
