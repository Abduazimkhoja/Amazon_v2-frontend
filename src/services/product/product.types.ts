export const PRODUCTS = 'products'

export type TypeData = {
	price: number
	categoryId: number
	name: string
	description?: string
	images: string[]
}

export type TypeDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumProductSort {
	HIGHT_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
