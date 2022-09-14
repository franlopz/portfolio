import { Project } from 'components/Projects'
import { getFiles, getfilesBySlug } from 'lib/markdown'
import { GetStaticProps } from 'next'
import md from 'markdown-it'
import Layout from 'components/Layout'

interface matterProps {
  frontMatter: Project
  content: string
}
const Project: React.FC<matterProps> = ({ frontMatter, content }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('projects')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace('.md', '')
    }
  }))
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontMatter, content } = await getfilesBySlug({
    type: 'projects',
    slug: params?.slug as string
  })

  return { props: { frontMatter, content } }
}

export default Project
