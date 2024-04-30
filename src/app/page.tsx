import Home from '@/app/Home'
import { ProductService } from '@/services/product/product.service'
import type { Metadata } from 'next'
import type { FC } from 'react'

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, pariatur?'
}

export const revalidate = 60

// REQUEST
async function getProducts() {
	const data = await ProductService.getAll({
		minify: true,
		page: '1',
		perPage: 8,
		ratings: ''
	})

	return data
}
// PAGE
const HomePage: FC = async () => {
	const { products, length } = await getProducts()

	return <Home products={products} length={length} />
}

export default HomePage
