import Container from 'compornents/container'
import Logo from 'compornents/logo'
import styles from 'styles/footer.module.css'

const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.flexContainer}>
        <Logo />
      </div>
    </Container>
  </footer>
)
export default Footer
