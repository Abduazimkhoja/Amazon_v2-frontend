'use client'
import { IProduct, IProducts } from '@/types/product.interface'
import { calcProductRating } from '@/utils/calc-product-rating'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

interface IProductRating {
	product: IProduct | IProducts
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const rating = calcProductRating(product.reviews)
	const reviewCount = product.reviews.length

	return (
		<div className='mb-2 flex items-center gap-1'>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{ display: 'inline-block' }}
				size={15}
				allowFraction
				transition
			/>
			<h5 className='text-sm ml-1' style={{ color: '#eaa904' }}>
				{rating}
			</h5>
			{isText && <h5 className='text-xs'>({reviewCount} reviews)</h5>}
		</div>
	)
}

export default ProductRating
