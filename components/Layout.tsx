import { FC } from 'react'
import Header from './Header'
import styles from 'styles/Layout.module.css'

interface Props {
  children: JSX.Element
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
