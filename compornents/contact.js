import Social from 'compornents/social'
import styles from 'styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  )
}
export default Contact
