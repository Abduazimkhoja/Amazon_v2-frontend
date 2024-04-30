import { IReview, IReviewMini } from '@/types/review.interface'

export const calcProductRating = (reviews: IReview[] | IReviewMini[]) => {
	const ratingsSum = reviews.reduce((acc, { rating }) => acc + rating, 0)
	const rating = ratingsSum / reviews.length
	return Math.round(rating) || 0
}
