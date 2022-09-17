import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const root = process.cwd()

interface PropFileBySlug {
  type: string
  slug: string
}

export const getFiles = async (type: string) => {
  return fs.readdirSync(path.join(root, 'data', type))
}

export const getAllFilesFrontMatter = async (type: string) => {
  const files = await getFiles(type)

  const frontMatterFiles = files.map((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf-8')
    console.log(source)
    const { data } = matter(source)
    return { ...data, slug: `${type}/${file.replace('.mdx', '')}` }
  })

  return frontMatterFiles
}

export const getfilesBySlug = async ({ type, slug }: PropFileBySlug) => {
  const mdSource = fs.readFileSync(
    path.join(root, 'data', type, `${slug}.mdx`),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(mdSource)

  return { frontMatter, content }
}
