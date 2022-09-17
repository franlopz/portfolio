import { Project } from 'components/Projects'
import { getFiles, getfilesBySlug } from 'lib/markdown'
import { GetStaticProps } from 'next'
import Layout from 'components/Layout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image, { ImageProps } from 'next/image'

interface matterProps {
  frontMatter: Project
  source: MDXRemoteSerializeResult
}

const components = {
  Img: (props: ImageProps) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <div style={{ width: '100%' }}>
      <Image {...props} layout="responsive" loading="lazy" />
    </div>
  )
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
  const paths = posts.map((post) => ({
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
  const source = await serialize(content, {})

  return { props: { frontMatter, source } }
}

export default Project
