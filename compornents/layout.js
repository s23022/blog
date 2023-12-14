import Header from 'compornents/header'
import Footer from 'compornents/footer'

const Layout = ({ children }) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
)
export default Layout
