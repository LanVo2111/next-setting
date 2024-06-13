import Image from "next/image";
import Link from "next/link";
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <div className="footer-wrapper">
          <div className={styles['top-footer']}>
            <div className="footer_logo">
              <Image src={'/assets/logo/main-logo.png'} alt={'Care'} width={98} height={38} priority/>
            </div>
            <div className={styles['list-icon']}>
              <span>Follow Us:</span>
              <ul>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <g clipPath="url(#clip0_824_9435)">
                        <path d="M28.0001 14.0858C28.0001 6.30529 21.7316 -0.00170898 14.0001 -0.00170898C6.26508 4.10157e-05 -0.00341797 6.30529 -0.00341797 14.0875C-0.00341797 21.1173 5.11708 26.9448 11.8091 28.0018V18.158H8.25658V14.0875H11.8126V10.9813C11.8126 7.45154 13.9038 5.50204 17.1011 5.50204C18.6341 5.50204 20.2353 5.77679 20.2353 5.77679V9.24179H18.4696C16.7318 9.24179 16.1893 10.3285 16.1893 11.4433V14.0858H20.0708L19.4513 18.1563H16.1876V28C22.8796 26.943 28.0001 21.1155 28.0001 14.0858Z" fill="#D49696" />
                      </g>
                      <defs>
                        <clipPath id="clip0_824_9435">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <g clipPath="url(#clip0_824_9437)">
                        <path d="M14 0C21.74 0 28 6.26 28 14C28 21.74 21.74 28 14 28C6.26 28 0 21.74 0 14C0 6.26 6.26 0 14 0ZM11.44 21.38C17.64 21.38 21.04 16.24 21.04 11.78V11.34C21.7 10.86 22.28 10.26 22.72 9.58C22.12 9.84 21.46 10.02 20.78 10.12C21.48 9.7 22.02 9.04 22.26 8.26C21.6 8.64 20.88 8.92 20.12 9.08C19.5 8.42 18.62 8.02 17.66 8.02C15.8 8.02 14.28 9.54 14.28 11.4C14.28 11.66 14.3 11.92 14.38 12.16C11.58 12.02 9.08 10.68 7.42 8.64C7.14 9.14 6.96 9.72 6.96 10.34C6.96 11.5 7.56 12.54 8.46 13.14C7.9 13.14 7.38 12.98 6.94 12.72V12.76C6.94 14.4 8.1 15.76 9.64 16.08C9.36 16.16 9.06 16.2 8.76 16.2C8.54 16.2 8.34 16.18 8.12 16.14C8.54 17.48 9.8 18.46 11.26 18.48C10.1 19.38 8.64 19.92 7.06 19.92C6.78 19.92 6.52 19.92 6.26 19.88C7.74 20.84 9.52 21.4 11.42 21.4" fill="#D49696" />
                      </g>
                      <defs>
                        <clipPath id="clip0_824_9437">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <rect width="28" height="28" rx="14" fill="#D49696" />
                      <path d="M18.2778 6.30005H9.72227C8.81464 6.30005 7.94419 6.6606 7.30239 7.30239C6.6606 7.94419 6.30005 8.81464 6.30005 9.72227V18.2778C6.30005 19.1855 6.6606 20.0559 7.30239 20.6977C7.94419 21.3395 8.81464 21.7 9.72227 21.7H18.2778C19.1855 21.7 20.0559 21.3395 20.6977 20.6977C21.3395 20.0559 21.7 19.1855 21.7 18.2778V9.72227C21.7 8.81464 21.3395 7.94419 20.6977 7.30239C20.0559 6.6606 19.1855 6.30005 18.2778 6.30005Z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M14.0001 17.4223C14.9077 17.4223 15.7782 17.0618 16.42 16.42C17.0618 15.7782 17.4223 14.9077 17.4223 14.0001C17.4223 13.0925 17.0618 12.222 16.42 11.5802C15.7782 10.9384 14.9077 10.5779 14.0001 10.5779C13.0925 10.5779 12.222 10.9384 11.5802 11.5802C10.9384 12.222 10.5779 13.0925 10.5779 14.0001C10.5779 14.9077 10.9384 15.7782 11.5802 16.42C12.222 17.0618 13.0925 17.4223 14.0001 17.4223Z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
                      <mask id="path-4-inside-1_824_9439" fill="white">
                        <path d="M18.7057 10.1501C18.9326 10.1501 19.1502 10.0599 19.3106 9.89949C19.4711 9.73904 19.5612 9.52143 19.5612 9.29452C19.5612 9.06761 19.4711 8.85 19.3106 8.68955C19.1502 8.5291 18.9326 8.43896 18.7057 8.43896C18.4787 8.43896 18.2611 8.5291 18.1007 8.68955C17.9402 8.85 17.8501 9.06761 17.8501 9.29452C17.8501 9.52143 17.9402 9.73904 18.1007 9.89949C18.2611 10.0599 18.4787 10.1501 18.7057 10.1501Z" />
                      </mask>
                      <path d="M18.7057 11.9501C19.4099 11.9501 20.0854 11.6703 20.5834 11.1723L18.0378 8.6267C18.2149 8.44958 18.4552 8.35008 18.7057 8.35008V11.9501ZM20.5834 11.1723C21.0814 10.6743 21.3612 9.99881 21.3612 9.29452H17.7612C17.7612 9.04404 17.8607 8.80382 18.0378 8.6267L20.5834 11.1723ZM21.3612 9.29452C21.3612 8.59023 21.0814 7.91477 20.5834 7.41676L18.0378 9.96234C17.8607 9.78522 17.7612 9.545 17.7612 9.29452H21.3612ZM20.5834 7.41676C20.0854 6.91875 19.4099 6.63896 18.7057 6.63896V10.239C18.4552 10.239 18.2149 10.1395 18.0378 9.96234L20.5834 7.41676ZM18.7057 6.63896C18.0014 6.63896 17.3259 6.91875 16.8279 7.41676L19.3735 9.96234C19.1964 10.1395 18.9561 10.239 18.7057 10.239V6.63896ZM16.8279 7.41676C16.3299 7.91477 16.0501 8.59023 16.0501 9.29452H19.6501C19.6501 9.545 19.5506 9.78522 19.3735 9.96234L16.8279 7.41676ZM16.0501 9.29452C16.0501 9.99881 16.3299 10.6743 16.8279 11.1723L19.3735 8.6267C19.5506 8.80382 19.6501 9.04404 19.6501 9.29452H16.0501ZM16.8279 11.1723C17.3259 11.6703 18.0014 11.9501 18.7057 11.9501V8.35008C18.9561 8.35008 19.1964 8.44958 19.3735 8.6267L16.8279 11.1723Z" fill="#ffffff" mask="url(#path-4-inside-1_824_9439)" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['center-bottom']}>
            <ul className={styles['footer_list']}>
              <li className={styles['footer_col']}>
                <h2 className={styles['col-item_title']}>Company</h2>
                <div className={styles.list}>
                  <Link href={"#"} className={styles['nav-link']}>About Us</Link>
                  <Link href={"#"} className={styles['nav-link']}>Teams</Link>
                  <Link href={"#"} className={styles['nav-link']}>Carrers</Link>
                  <Link href={"#"} className={styles['nav-link']}>Links</Link>
                </div>
              </li>
              <li className={styles['footer_col']}>
                <h2 className={styles['col-item_title']}>Contact</h2>
                <div className={styles.list}>
                  <Link href={"#"} className={styles['nav-link']}>Help & Support</Link>
                  <Link href={"#"} className={styles['nav-link']}>Partner with us </Link>
                  <Link href={"#"} className={styles['nav-link']}>Ride with us </Link>
                  <Link href={"#"} className={styles['nav-link']}>See all cities</Link>
                </div>
              </li>
              <li className={styles['footer_col']}>
                <h2 className={styles['col-item_title']}>Legal</h2>
                <div className={styles.list}>
                  <Link href={"#"} className={styles['nav-link']}>Accessibility</Link>
                  <Link href={"#"} className={styles['nav-link']}>Teams and Conditions</Link>
                  <Link href={"#"} className={styles['nav-link']}>Privacy Policy</Link>
                  <Link href={"#"} className={styles['nav-link']}>Cookie Policy</Link>
                </div>
              </li>
            </ul>
            <div className={styles.form}>
              <p>Receive exclusive offers in your mailbox.</p>
              <form>
                <input placeholder="Enter Your Email" type="email" />
                <button type="submit" className={styles['btn-submit']}>Submit</button>
              </form>
            </div>
          </div>
          <div className={styles['copy-right']}>
            <small>All rights Reserved, CraveCart 2024</small>
          </div>
        </div>
      </div>
    </footer>
  )
}