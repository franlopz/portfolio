import CardsContainer from 'components/CardsContainer'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Layout from 'components/Layout'
import ProjectCard from 'components/ProjectCard'
import { getAllFilesFrontMatter } from 'lib/markdown'
import Head from 'next/head'
import { ProjectsArrayProps } from 'pages'

const Projects = ({ projects }: ProjectsArrayProps) => {
  return (
    <Layout>
      <>
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CardsContainer title="Projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </CardsContainer>
      </>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')
  return { props: { projects } }
}

export default Projects
