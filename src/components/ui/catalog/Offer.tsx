import { ICategoryProduct } from '@/types/category.interface'
import { Heading } from '@chakra-ui/react'
import type { FC } from 'react'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'

const Offer: FC<ICategoryProduct> = async ({ title, products }) => {
	if (!title && !products) return <Loader />

	return (
		<section className='container'>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-8'>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Offer
