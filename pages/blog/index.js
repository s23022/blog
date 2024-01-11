import { getAllPosts } from 'lib/api'
import Meta from 'compornents/meta'
import Container from 'compornents/container'
import Hero from 'compornents/hero'
import Posts from 'compornents/posts'

const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='Blog' subtitle='Recent Posts' />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts
    }
  }
}
export default Blog
