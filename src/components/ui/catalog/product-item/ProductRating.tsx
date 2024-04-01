'use client'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const [rating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

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
			{isText && (
				<h5 className='text-xs'>({product.reviews.length} reviews)</h5>
			)}
		</div>
	)
}

export default ProductRating
