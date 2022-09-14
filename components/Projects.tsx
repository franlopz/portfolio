import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from 'styles/Projects.module.css'

export interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

interface ProjectWithSlug extends Project {
  slug: string
}

export interface ProjectsArrayProps {
  projects: ProjectWithSlug[]
}

const Projects: FC<ProjectsArrayProps> = ({ projects }) => {
  return (
    <section id="projects" className={styles.container}>
      <h2>Projects</h2>
      <hr />

      <div className={styles['grid-cards']}>
        {projects.map((project) => (
          <Link href={project.slug} key={project.title}>
            <div className={styles['project-card']}>
              <div className={styles.image}>
                <Image
                  alt={project.title}
                  src={project.imageUrl}
                  width="720"
                  height="480"
                />
              </div>
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
        ))}
      </div>
    </section>
  )
}

export default Projects
