"use client"
import { useParams } from 'next/navigation'

import { useGetProductByCategoriesQuery } from "@/utils/fetch"
import { parseDataToNumber } from "@/utils/hook"

export default function ListProductByCategory() {
  const { id } = useParams()
  const { data, isLoading } = useGetProductByCategoriesQuery(parseDataToNumber(id + ''))
  
  return (
    <div>
      aaaa
    </div>
  )
}