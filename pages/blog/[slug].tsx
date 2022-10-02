import { getFiles, getfilesBySlug } from 'lib/markdown'
import Layout from 'components/Layout'
import components from 'components/MDXComponents'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { Post } from 'pages/blog'
import remarkGfm from 'remark-gfm'

interface matterProps {
  frontMatter: Post
  source: MDXRemoteSerializeResult
}

const Post: React.FC<matterProps> = ({ source }) => {
  return (
    <Layout>
      <MDXRemote {...source} components={components} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')
  const paths = posts?.map((post) => ({
    params: {
      slug: post.replace('.mdx', '')
    }
  }))
  if (paths?.length === 0) return { paths: [], fallback: false }
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontMatter, content } = await getfilesBySlug({
    type: 'blog',
    slug: params?.slug as string
  })

  const source = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] }
  })

  return { props: { frontMatter, source } }
}

export default Post
