"use client"
import Image from "next/image"
import { Loading } from "@/components/loading"
import { TabDetail } from "@/components/tab-detail"
import { RelatedProduct } from "@/components/related-product"
import NewsletterBanner from "@/components/banner"
import { Insta } from "@/components/insta"

import { useGetProductDetailQuery, useGetRelatedProductQuery } from "@/utils/fetch"
import stylesDetail from '../../../styles/detail.module.scss'
import { parseDataToNumber } from "@/utils/hook"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductDetail({ params }: Props) {
  const id = params.id;
  const { data: productDetail } = useGetProductDetailQuery(parseDataToNumber(id))
  const {data: relatedProduct} = useGetRelatedProductQuery(parseDataToNumber(id))

  return (
    <div className={stylesDetail.detail}>
      <div className="inner">
        {productDetail ? (
          <div className={stylesDetail['detail-wrapper']}>
            <div className={stylesDetail.infor}>
              <div className="detail_image">
                <Image src={`http://localhost:3010/${productDetail.image}`} alt="" width={400} height={400} priority />
              </div>
              <div className={stylesDetail['detail_content']}>
                <h1 className={stylesDetail['detail_title']}>{productDetail.title}</h1>
                <p className={stylesDetail.price}>${productDetail.price}</p>
                <p className={stylesDetail.description}>{productDetail.description}</p>
              </div>
            </div>
            <TabDetail />
          </div>
        ): <Loading count={30} />} 
        <RelatedProduct relatedProduct={relatedProduct}/>
      </div>
      <NewsletterBanner />
      <Insta />
    </div>
  )
}
