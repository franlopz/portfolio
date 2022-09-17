import { FC } from 'react'
import Header from './Header'
import styles from 'styles/Layout.module.css'
import Footer from './Footer'

interface Props {
  children: JSX.Element
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
