import Meta from 'compornents/meta'
import Container from 'compornents/container'
import Hero from 'compornents/hero'

const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}

export default Home
