import Link from 'next/link'
import { Post } from 'pages/blog'
import styles from 'styles/PostCard.module.css'

const PostCard = ({ ...post }: Post) => {
  return (
    <Link href={post.slug}>
      <div className={styles.container}>
        <h3 className={styles.title}>{post.title}</h3>
        <p>{post.description}</p>
        <h4 className={styles.meta}>{post.date}</h4>
      </div>
    </Link>
  )
}

export default PostCard
