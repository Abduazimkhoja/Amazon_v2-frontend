export const PRODUCTS = 'products'

export type TypeProductData = {
	price: number
	categoryId: number
	name: string
	description?: string
	images: string[]
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings?: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
	minify?: boolean
}

export enum EnumProductSort {
	HIGHT_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeParamsFilters = {
	searchParams: TypeProductDataFilters
}
