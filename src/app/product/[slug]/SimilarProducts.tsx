import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import type { FC } from 'react'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

const SimilarProducts: FC<ISimilarProducts> = ({ similarProducts }) => {
	return (
		<div className='mt-20'>
			<Heading className='mb-7'>Similar products: </Heading>
			{similarProducts.length ? (
				<div className='grid grid-cols-4 gap-10'>
					{similarProducts.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}

export default SimilarProducts
