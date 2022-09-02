import styles from 'styles/Header.module.css'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'
const menuItems = [
  { title: 'About', link: '#about' },
  { title: 'Knowledge', link: '#knowledge' },
  { title: 'Projects', link: '#projects' },
  { title: 'Contact', link: '#contact' }
]

const Header = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const openSideMenu = () => {
    setSidebarOpened((state) => !state)
  }
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <a href="">
          <Image
            src="https://fjlpbucket.s3.us-east-2.amazonaws.com/FJ.png"
            width={50}
            height={50}
            alt="FJLP"
          />
        </a>
      </div>
      <div className={styles['top-bar']}>
        <div className={styles['horizontal-menu']}>
          {menuItems.map((item) => (
            <a className={styles.anchor} key={item.title} href={item.link}>
              {item.title}
            </a>
          ))}
        </div>
        <div className={styles['vertical-menu']}>
          <button className={styles.button} onClick={openSideMenu}>
            <GiHamburgerMenu size="2em" />
          </button>
          <div
            className={`${styles['side-menu']} ${
              sidebarOpened === false ? styles['side-menu-closed'] : ''
            }`}
            onClick={openSideMenu}
          >
            <div className={styles.menu}>
              <button className={`${styles.button} ${styles['button-closed']}`}>
                <GrFormClose size="2em" />
              </button>
              {menuItems.map((item) => (
                <a className={styles.anchor} key={item.title} href={item.link}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header