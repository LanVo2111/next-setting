import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useGetRelatedBlogQuery } from "@/utils/fetch";
import { formatDate, parseDataToNumber } from "@/utils/hook";
import { BlogType } from "@/types";

import styles from '../styles/post.module.scss'
import { Loading } from "./loading";

export const RelatedBlog = () => {
  const { id } = useParams();
  const { data: relatedBlog } = useGetRelatedBlogQuery(parseDataToNumber(id + ''))

  return (
    <div className={styles['related-blog']}>
      <div className="inner">
        <h2 className="block-title">RELATED BLOG POSTS</h2>
        <ul className={styles['post_list']}>
          {relatedBlog ? relatedBlog.map((item: BlogType) => (
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
          ))
          : <Loading count={30}/>
        }
        </ul>
      </div>
    </div>
  )
}