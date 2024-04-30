import { ICategory } from './category.interface'
import { IReview, IReviewMini } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}

export interface IProducts {
	id: number
	name: string
	slug: string
	price: number
	reviews: IReviewMini[]
	images: string[]
	category: { slug: string }
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
