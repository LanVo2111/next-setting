import Link from "next/link"
import Image from "next/image"

import Title from "./title"
import styles from '../styles/home.module.scss'
import { CategoryType } from "@/types"
import { Loading } from "./loading"

type CategoriesProps = {
  categories: CategoryType[]
}

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className='categories'>
      <div className="inner inner-lg">
        <Title text="Categories" />
        <ul className={styles['categories_list']}>
          {categories && categories.length > 0 ? categories.map((categoryItem: CategoryType) => (
            <li className={styles['categories_item']} key={categoryItem.id}>
              <Link href={"#"}>
                <div className="image">
                  <Image src={`http://localhost:3010/${categoryItem.image}`} alt={categoryItem.category} width={233} height={268} />
                </div>
                <span>{categoryItem.category}</span>
              </Link>
            </li>
          )) : (
            <Loading count={15}/>
          )}
        </ul>
      </div>
    </section>
  )
}