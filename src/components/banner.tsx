"use client"
import styles from '../styles/post.module.scss'

export default function NewsletterBanner() {
  return (
    <div className={styles.newsletter}>
      <div className='inner'>
        <div className={styles.content}>
          <h3>SIGN UP FOR OUR NEWSLETTER</h3>
          <form>
            <input type='email' placeholder='Your Email Address' />
            <button type='submit'>SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  )
}