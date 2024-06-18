"use client"
import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/cart.module.scss'
import { CartItemType } from '@/types'
import { parseDataToNumber, useAppDispatch, useAppSelector } from '@/utils/hook'
import { increaseCart, decreaseCart, removeItemCart} from '@/reducers/cartReducers'
import { Insta } from '@/components/insta'
import { Dialog } from '@/components/dialog'


export default function Cart() {
  const cartData = useAppSelector<any>(state => state.cart.cartData)
  const [open, setOpen] = useState(false)
  
  const getTotalQuantity = () => {
    let total = 0
    cartData.forEach((item: { quantity: number }) => {
      total += item.quantity
    })
    return total
  }
  const getTotalPrice = () => {
    let totalPrice = 0
    cartData.forEach((item: { price: string; quantity: number }) => {
      totalPrice += (parseDataToNumber(item.price) * item.quantity)
    })
    return totalPrice
  }
  const dispatch = useAppDispatch()
  const increaseItem = (id: number) => {
    dispatch(increaseCart(id))
  }
  const decreaseItem = (id: number) => {
    dispatch(decreaseCart(id))
  }
  const removeItem = (id: number) => {
    dispatch(removeItemCart(id))
  }
  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handelActionConfirm = (id: number) => {
    setOpen(false)
    dispatch(removeItemCart(id))
  }

  console.log('cartData', cartData)
  return (
    <div className="cart">
      <div className='inner'>
        <div className={styles.cart_form}>
          <ul className={styles.cart_list}>
            {cartData.map((cartItem: CartItemType) => (   
              <li className={styles.cart_item} key={cartItem.id}>
                <div className={styles['image-cart']}>
                  <Image src={`http://localhost:3010/${cartItem.image}`} alt={cartItem.title} width={80} height={80} />
                </div>
                <p className={styles['price-item']}>${cartItem.price}</p>
                <div className={styles.quantity}>
                  <button type='button' className='btn-number quantity-minus' onClick={() => decreaseItem(cartItem.id)}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3.5H4.99997C3.8954 3.5 2.99997 4.39543 2.99997 5.5V19.5C2.99997 20.6046 3.8954 21.5 4.99997 21.5H19C20.1045 21.5 21 20.6046 21 19.5V5.5C21 4.39543 20.1045 3.5 19 3.5Z"
                        stroke="#828EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.99997 12.5H16" stroke="#828EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <input type="text" name="name" value={cartItem.quantity} readOnly />
                  <button type='button' className='btn-number' onClick={() => increaseItem(cartItem.id)}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3.5H4.99997C3.8954 3.5 2.99997 4.39543 2.99997 5.5V19.5C2.99997 20.6046 3.8954 21.5 4.99997 21.5H19C20.1045 21.5 21 20.6046 21 19.5V5.5C21 4.39543 20.1045 3.5 19 3.5Z" stroke="#828EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8.5V16.5" stroke="#828EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.99997 12.5H16" stroke="#828EF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <p className={styles['name-cart']}>{cartItem.title}</p>
                <button className={styles['trash-icon']} onClick={openModal}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="25" height="25" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_9_77" transform="scale(0.01)" />
                      </pattern>
                      <image id="image0_9_77" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADHklEQVR4nO3dzUobYRjF8fOkEzdtBRfNolVwHzdtCCHmDkTwBuyurSK9jt5BbSWUQtsr6Ae9ABeZEOOmTbeKWlw32o0h83SjEIKFdvJOctTzAyHvMHnmlT8TMC4GEBERSccmvYG/KRaLU9PT088ArAJYAHB7xJG/3f2bmX3odrv1TqdzNvouw6MMUqvV7idJ8hnAw4wusRtF0fL29vZxRvNTy016A8OKxeJUxjEA4FG/3/9UKpXyGV4jFbog5x9TWcYAALh7KZ/PP8n6Ov8rmvQGLrE6tP4CYK3RaPwcZWilUpk1sy0zW7o4ZmaPAbwaZW5odHcIgOLgIkmS9VFjAECz2Tzq9/vrQ4cXRp0bGmOQO4OLZrN5FGpwq9U6HDp0N9TsUBiD3GgKQkZByKT+w7BWqy0lSfISwHzA/VwH++6+Ecfx1zRvTn2HuPtrKMZl5s2snvbN+sgikzpIkiRrAPYC7uW62AOQ+huAYF8uVqtVH1w3Gg3KLy5Dyer31UcWGQUhoyBkFISMgpBREDIKQkZByCgIGbr/qS8uLq64ex2Au/vTOI4/TvL8caO7Q9x9E8A9AAUz25z0+eNGFwTA/YHXDwjOHyvGIDeagpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFISMgpBREDIKQkZByCgIGQUhoyBkFIQMY5D9gdf/8jiMrM8fK7og7r4B4Oj8Z2PS54+bnh+Skp4fckMoCBkFIaMgZBSEjIKQURAyIYOcDC4qlcpswNlUyuXy3NChk0tPTCFkkB+DCzPbuo5RyuXyXBRFW0OHv4eaH/L5Ie8BVC4WZrZkZofVajXgJTi5+7tQs4LdId1utw5gN9S8K6TV6/XehBoWLEin0zmLomjZzNqhZl4BO1EUrbTb7V6ogbdCDQKAg4OD00Kh8DaXyx2b2QyAGQBTIa9B4BTAjru/6PV6z+M4/jXpDYmIiADAH5sq34HRT4luAAAAAElFTkSuQmCC" />
                    </defs>
                  </svg>

                </button>
                {open && <Dialog text={'Are you sure you want to delete this item?'} closeModal={closeModal} handelActionConfirm={() => handelActionConfirm(cartItem.id)}/>}
              </li>
            ))}
          </ul>
          <div className={styles['cart-total']}>
            <h4 className={styles['cart-total_title']}>Cart Total</h4>
            <dl>
              <dt>Total Item</dt>
              <dd>{getTotalQuantity() | 0}</dd>
              <dt>Total Price</dt>
              <dd>${getTotalPrice() | 0}</dd>
            </dl>
          </div>
        </div>
        <Insta />
      </div>
    </div>
  )
}

// () => removeItem(cartItem.id)
