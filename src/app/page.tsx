import Home from '@/app/Home'
import { CategoryService } from '@/services/category.service'
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
	const products = await ProductService.getAll({
		minify: true,
		page: '1',
		perPage: 8,
		ratings: ''
	})

	const categoryProducts = await CategoryService.getCategoryProducts()

	return {products, categoryProducts}
}
// PAGE
const HomePage: FC = async () => {
	const data = await getProducts()

	return <Home  {...data}/>
}

export default HomePage
