import { getAllPosts } from 'lib/api'
import Meta from 'compornents/meta'
import Container from 'compornents/container'
import Hero from 'compornents/hero'
import Posts from 'compornents/posts'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

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

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts
    }
  }
}
export default Blog
