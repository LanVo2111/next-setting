import Image from "next/image";
import styles from '../../styles/login.module.scss'

export default function Login() {
  return (
    <main>
      <div className={styles.login}>
        <div className={styles['wrap-img']}>
          <Image src={'/assets/login-bg.jpg'} alt="" width={400} height={500} />
        </div>
        <div className={styles['login_form']}>
          <div className={styles['form-inner']}>
            <h1 className={styles['login_title']}>Login to order food</h1>
            <p className={styles['signup']}>Haven’t signed-up yet? <span>Signup here</span></p>
            <p className={styles['continue-txt']}><span>or continue with</span></p>
            <form>
              <input placeholder="Please enter your email" type="email" />
              <input placeholder="Please enter your password" type="password" />
              <p className={styles['forget-psw']}>Forgot password?</p>

              <button type="submit" className={styles['btn-login']}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}