import '@/styles/globals.css'
import Layout from 'compornents/layout'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
