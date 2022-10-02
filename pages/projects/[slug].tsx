import { getFiles, getfilesBySlug } from 'lib/markdown'
import { GetStaticProps } from 'next'
import Layout from 'components/Layout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import { Project } from 'pages'
import components from 'components/MDXComponents'

interface matterProps {
  frontMatter: Project
  source: MDXRemoteSerializeResult
}

const Project: React.FC<matterProps> = ({ source }) => {
  return (
    <Layout>
      <MDXRemote {...source} components={components} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('projects')
  const paths = posts?.map((post) => ({
    params: {
      slug: post.replace('.mdx', '')
    }
  }))
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
  const source = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] }
  })

  return { props: { frontMatter, source } }
}

export default Project
