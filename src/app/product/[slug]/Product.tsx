'use client'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import ProductGallery from './ProductGallery'
import ProductReviewsCount from './ProductReviewsCount'
import SimilarProducts from './SimilarProducts'
import ProductInformation from './product-information/ProductInformation'
import ProductReviews from './product-reviews.tsx/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

const Product: FC<IProductPage> = ({
	initialProduct,
	similarProducts,
	slug = ''
}) => {
	const { data: product } = useQuery({
		queryKey: ['get product', initialProduct.id],
		queryFn: () => ProductService.getBySlug(slug),
		initialData: initialProduct,
		enabled: !!slug
	})

	return (
		<>
			<Heading className='mb-1'>{product.name}</Heading>
			<ProductReviewsCount product={product} />
			<div
				className='grid gap-12 mt-6'
				style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
			>
				<ProductGallery images={product.images} />
				<div className='opacity-80 font-light'>
					<div className='font-semibold mb-1'>Description:</div>
					{product.description}
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</>
	)
}

export default Product
