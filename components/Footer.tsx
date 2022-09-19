import styles from 'styles/Footer.module.css'
import links from 'shared/jsons/footerLinks.json'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        {links.map((item) => (
          <Link href={item.link} key={item.label}>
            <a
              className={styles.link}
              target={item.external ? '_blank' : ''}
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
