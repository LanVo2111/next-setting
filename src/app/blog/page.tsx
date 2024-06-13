'use client'
import Image from "next/image";
import Link from "next/link";

import { Loading } from "@/components/loading";

import { useGetBlogListQuery } from "@/utils/fetch";
import { formatDate } from "@/utils/hook";
import { BlogType } from "@/types";

import styles from '../../styles/post.module.scss'
import { Insta } from "@/components/insta";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function Blog() {
  const { data, isLoading, isError } = useGetBlogListQuery('blog')

  if (isError) return
  if (isLoading) return (<Loading count={30} />)

  const breadcrumb = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Blog',
    }
  ]

  return (
    <>
      <div className={styles.post}>
        <div className="banner">
          <div className="inner">
            <div className="content">
              <h1 className="child-title">BLOG</h1>
              <Breadcrumbs breadcrumbData={breadcrumb} />
            </div>
          </div>
        </div>
        <div className="inner">
          {
            data && (
              <ul className={styles['post_list']}>
                {data.map((item: BlogType) => (
                  <li className={styles['post_item']} key={item.id}>
                    <article>
                      <Link href={`blog/${item.id}`}>
                        <div className={styles['post_image']}>
                          <Image src={`http://localhost:3010/${item.image}`} alt="aaa" width={416} height={267} className="img-fluid" priority />
                        </div>
                        <div className="post_content">
                          <div className={styles['post_meta']}>
                            <span className={styles['post_category']}>{item.category}</span>
                            {` / `}
                            <span className={styles['post_date']}>{formatDate(item.date)}</span>
                          </div>
                          <h4 className={styles['post_title']}>{item.title}</h4>
                          <p className={styles['post_desc']}>{item.description}</p>
                        </div>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>
      <Insta />
    </>
  )
}