export type NavBarLink = {
  text: string
  link: string
}

export type CategoryType = {
  id: number
  category: string
  image: string
}

export type CardItemType = {
  id: number
  category: string
  image: string
  title: string
  price: string
  description: string
  quantity?: number
}

export type CartItemType = {
  id: number
  category: string
  image: string
  title: string
  price: string
  description: string
  quantity?: number
}

export type CartProductType = {
  cartNumber: number
}

export type InstaImgType = {
  id: number
  pathImg: string
  link: string
}

export type BlogType = {
  id: number
  image: string
  date: Date
  title: string
  description: string
  category: string
  content?: string
}

export type BreadcrumbItemType = {
  text: string
  link?: string
}