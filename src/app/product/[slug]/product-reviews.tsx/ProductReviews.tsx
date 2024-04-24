import { useAuth } from '@/hooks/useAction'
import { IReview } from '@/types/review.interface'
import Heading from '@/ui/Heading'
import Modal from '@/ui/modal/Modal'
import { FC, useState } from 'react'
import LeaveReviewForm from './LeaveReviewForm'
import ReviewItem from './ReviewItem'

interface IProductReviews {
	reviews: IReview[]
	productId: number
}

const ProductReviews: FC<IProductReviews> = ({ reviews, productId }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { user } = useAuth()

	if (!reviews.length) return null

	return (
		<section>
			<div className='mb-9'>
				<Heading className='mb-3'>Reviews: </Heading>
				{user && <button className='text-aqua'>Leave a review</button>}
			</div>

			{user && (
				<Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
					<LeaveReviewForm productId={productId} />
				</Modal>
			)}

			<div className='grid grid-cols-4 gap-10'>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</section>
	)
}

export default ProductReviews
