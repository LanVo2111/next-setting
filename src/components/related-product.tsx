"use client"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/card.module.scss'
import { CardItemType } from '@/types';

type ProductProps = {
  relatedProduct: CardItemType[]
}

export const RelatedProduct = ({ relatedProduct }: ProductProps) => {
  return (
    <div className={styles['related-product']}>
      <div className='main-title'>
        <h2>Related Products</h2>
      </div>
      <ul className={styles['card-list']}>
        {relatedProduct?.map(item => (
          <li className={styles['card-item']} key={item.id}>
            <Link href={`detail/${item.id}`}>
              <div className={styles['wrap-image']}>
                <Image src={`http://localhost:3010/${item.image}`} alt="" width={277} height={413} className={styles['card-image']} priority />
              </div>
              <div className={styles.content}>
                <h3 className={styles['product-title']}>{item.title}</h3>
                <p className={styles.price}>${item.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}