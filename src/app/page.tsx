"use client"
import CardList from '@/components/card-list'
import Gallery from '@/components/gallery'

import { useGetProductListQuery } from '@/utils/fetch'
import styles from './page.module.css'
import { Feature } from '@/components/feature'
import { Slider } from '@/components/slider'

export default function Home() {

  const { data: products, error, isLoading } = useGetProductListQuery('products')

  if (error) return null

  return (
    <main className={styles.main}>
      <Slider />
      <Feature />
      <CardList products={products} isLoading={isLoading} />
    </main>
  )
}
