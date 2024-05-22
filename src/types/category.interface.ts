import { IProduct } from './product.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
}

export interface ICategoryProduct {
	title: string
	products: IProduct[]
}
