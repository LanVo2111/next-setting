import CardItem from "./card-item";
import styles from '../styles/card.module.scss'
import { CardItemType, CategoryType } from "@/types";
import { Loading } from "./loading";
import { useRef, useState } from "react";
import { useGetCategoriesListQuery, useGetProductByCategoriesQuery } from "@/utils/fetch";

type CardProductProps = {
  products: [],
  isLoading: boolean
}

export default function CardList({ products, isLoading }: CardProductProps) {
  const [id, setId] = useState(1)
  const { data: categories } = useGetCategoriesListQuery('categories')
  const { data: productCate } = useGetProductByCategoriesQuery(id)
  const [dataRender, setDataRender] = useState(products)

  const ref = useRef(null);

  const clickToRenderProduct = (id: number) => {
    setId(id)
    if (id === 0) {
      setDataRender(products)
    }
    else {
      setDataRender(productCate)
    }
  }

  return (
    <section className="cards">
      <div className="inner" ref={ref}>
        <div className='main-title'>
          <h2>NEW ARRIVALS</h2>
        </div>
        <div className={styles['cards-wrap']}>
          <div className={styles['left-side']}>
            <h3>BROWSE BY CATEGORIES</h3>
            <ul>
              <li onClick={() => clickToRenderProduct(0)}>
                <span>All</span>
              </li>
              {categories?.map((cateItem: CategoryType) => (
                <li key={cateItem.id} onClick={() => clickToRenderProduct(cateItem.id)}>
                  <span >{cateItem.category}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['right-side']}>
            {
              isLoading ? <Loading count={20} /> :
                (
                  <>
                    <ul className={styles['card-list']}>
                      {dataRender?.map((cardItem: CardItemType) => (
                        <CardItem key={cardItem.id} {...cardItem} />
                      ))}
                    </ul>
                  </>
                )
            }
          </div>
        </div>
      </div>
    </section>
  )
}