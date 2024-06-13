import styles from '../styles/cart.module.scss'

type DialogProps = {
  text: string
  closeModal: () => void
  handelActionConfirm: () => void
}
export const Dialog = ({ text, closeModal, handelActionConfirm }: DialogProps) => {
  return (
    <div className={styles.dialog}>
      <div className="inner">
        <div className={styles['dialog-wrap']}>
          <div>
            <button type="button" onClick={closeModal} className={styles['btn-canel']}>
              X
            </button>
          </div>
          <div className={styles['dialog_cnt']}>
            <p>{text}</p>
          </div>
          <div className={styles.action}>
            <button onClick={() => closeModal()} className={styles.cancel}>
              No
            </button>
            <button className={styles.ok} onClick={handelActionConfirm}>Yes</button>
          </div>
        </div>
      </div>
    </div >
  )
}