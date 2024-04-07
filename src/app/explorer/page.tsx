import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ProductService } from '@/services/product/product.service'
import {
	TypeParamsFilters,
	TypeProductDataFilters
} from '@/services/product/product.types'
import { ProductExplorer } from './ProductExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

// REQUEST
async function getProducts(searchParams: TypeProductDataFilters) {
	return await ProductService.getAll({
		minify: true,
		page: 1,
		perPage: 20,
		ratings: ''
	})
}

export default async function ExplorerPage({
	searchParams
}: TypeParamsFilters) {
	const data = await getProducts(searchParams)
	return <ProductExplorer initialProducts={data} />
}
