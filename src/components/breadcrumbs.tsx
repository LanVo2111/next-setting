import { BreadcrumbItemType } from "@/types"
import Link from "next/link"

type BreadcrumbProps = {
  breadcrumbData: BreadcrumbItemType[]
  isChildPage?: boolean
}

export const Breadcrumbs = ({ breadcrumbData, isChildPage }: BreadcrumbProps) => {
  return (
    <div className={`breadcrumb ${isChildPage ? 'childPage' : ''}`}>
      <ul>
        {breadcrumbData.map((item: BreadcrumbItemType, index: number) => (
          item.link ? (
            <li className="breadcrumb_item" key={index}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          )
            : <li className="breadcrumb_item" key={index}><span>{item.text}</span></li>
        ))}
      </ul>
    </div>
  )
  
}