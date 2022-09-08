import Image from 'next/image'
import styles from 'styles/Knowledge.module.css'
import IconCard from './IconCard'
import icons from 'shared/jsons/icons.json'

const Knowledge = () => {
  return (
    <section id="knowledge" className={styles.container}>
      <h2>Knowledge</h2>
      <hr />
      <div className={styles.icons}>
        {icons.map(({ icon, title, alternateIcon }) => (
          <IconCard
            key={title}
            icon={icon}
            alternateIcon={alternateIcon}
            title={title}
          />
        ))}
      </div>
    </section>
  )
}

export default Knowledge
