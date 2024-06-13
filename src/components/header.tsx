"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { navBarLink } from '@/mock/NavbarLink'
import { useAppSelector } from '@/utils/hook'
import styles from '../styles/header.module.scss'

export default function Header() {
  // const cartNumber = useAppSelector(state => state.cart.cartData.length)
  const cartData = useAppSelector(state => state.cart.cartData)
  const getTotalQuantity = () => {
    let total = 0
    cartData.forEach(item => {
      total += item?.quantity
    })
    return total
  }
  // const [fixed, setFixed] = useState('')
  // const isSticky = () => {
  //   const scrollTop = window.scrollY;
  //   const stickyClass = scrollTop >= 200 ? "is-fixed" : "";
  //   setFixed(stickyClass);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // }, []);

  return (
    <header className={`${styles.header}`}>
      <div className="inner">
        <div className={styles['header-wrapper']}>
          <h1 className="logo">
            <Link href="/">
              <Image src={'/assets/logo/main-logo.png'} alt={'Care'} width={98} height={38} priority/>
            </Link>
          </h1>
          <ul className={styles.navbar}>
            {navBarLink.map(navBarItem => (
              <li className='nav-item' key={navBarItem.text}>
                <Link className={styles['nav-link']} href={`/${navBarItem.link}`}>
                  {navBarItem.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles['header_icon']}>
            <li className={styles['bag-icon']}>
              <Link href={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                  <path
                    d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
                </svg>
                <span className={styles['cart-number']}>{getTotalQuantity() | 0}</span>
              </Link>
            </li>
            <li className='user-icon'>
              <Image src={'/assets/user-header.svg'} alt='icon' width={24} height={24} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}