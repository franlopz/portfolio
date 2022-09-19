import Image from 'next/image'
import Link from 'next/link'
import { ProjectWithSlug } from 'pages'
import styles from 'styles/ProjectCard.module.css'

const ProjectCard = ({ ...project }: ProjectWithSlug) => {
  return (
    <Link href={project.slug} key={project.title}>
      <div className={styles['project-card']}>
        <Image
          alt={project.title}
          src={project.imageUrl}
          width="720"
          height="480"
        />
        <div className={styles.info}>
          <div className={styles.title}>
            <h2>{project.title}</h2>
          </div>
          <div className={styles.technologies}>
            {project.technologies.map((item) => (
              <h4 key={item}>{item}</h4>
            ))}
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
