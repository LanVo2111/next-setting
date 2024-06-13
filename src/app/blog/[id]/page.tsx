"use client"
import { useParams } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { useGetBlogDetailQuery } from "@/utils/fetch"
import { formatDate, parseDataToNumber } from "@/utils/hook";

import styles from '../../../styles/post.module.scss'
import { Insta } from "@/components/insta";
import { RelatedBlog } from "@/components/related-post";
import NewsletterBanner from "@/components/banner";

export default function BlogDetail() {
  const { id } = useParams();
  const { data } = useGetBlogDetailQuery(parseDataToNumber(id + ''))
  const breadcrumb = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Blog',
      link: '/blog'
    },
    {
      text: data?.title,
    },
  ]

  return (
    <div className={styles['blog-detail']}>
      <div className="inner">
        {data && (
          <>
            <div className={styles['top']}>
              <div className={styles['post_meta']}>
                <span className={styles['post_category']}>{data.category}</span>
                {` / `}
                <span className={styles['post_date']}>{formatDate(data.date)}</span>
              </div>
              <h1>{data.title}</h1>
              <Breadcrumbs breadcrumbData={breadcrumb} isChildPage={true}/>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </>

        )}
      </div>
      <Insta />
      <NewsletterBanner />
      <RelatedBlog />
    </div>
  )
}