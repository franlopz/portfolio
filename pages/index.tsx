import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from 'components/Header'
import About from 'components/About'
import Knowledge from 'components/Knowledge'
import CardsContainer from 'components/CardsContainer'
import { getAllFilesFrontMatter } from 'lib/markdown'
import Footer from 'components/Footer'
import ProjectCard from 'components/ProjectCard'
import Layout from 'components/Layout'

export interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

export interface ProjectWithSlug extends Project {
  slug: string
}

export interface ProjectsArrayProps {
  projects: ProjectWithSlug[]
}

const Home: NextPage<ProjectsArrayProps> = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Francisco Lopez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Knowledge />
      <CardsContainer title="Projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </CardsContainer>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects')
  return { props: { projects } }
}

export default Home
