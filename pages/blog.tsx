import HomeFeed from 'components/HomeFeed'
import Layout from 'components/Layout'
import PostCard from 'components/PostCard'
import { getAllFilesFrontMatter } from 'lib/markdown'
import styles from 'styles/blog.module.css'

export interface Post {
  title: string
  description: string
  date: string
  slug: string
}
interface Props {
  posts: Post[]
}

const Blog = ({ posts }: Props) => {
  console.log(posts)
  return (
    <Layout>
      <HomeFeed title="Recent posts">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard {...post} key={post.title} />)
        ) : (
          <p className={styles['no-posts']}>No posts</p>
        )}
      </HomeFeed>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}
export default Blog
