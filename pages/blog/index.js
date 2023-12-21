import Meta from 'compornents/meta'
import Container from 'compornents/container'
import Hero from 'compornents/hero'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='Blog' subtitle='Recent Posts' />
    </Container>
  )
}
export default Blog
