import Home from '@/app/Home'
import { ProductService } from '@/services/product/product.service'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	description: ''
}

export const revalidate = 60

// REQUEST
async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4,
		ratings: ''
	})

	return data
}
// PAGE
export const HomePage: FC = async () => {
	const { products, length } = await getProducts()

	return <Home products={products} length={length} />
}

export default HomePage
