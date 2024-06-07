import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getById(reviewId: string | number) {
		return instance<IReview>({
			url: `${REVIEWS}/${reviewId}`,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: string | number) {
		return instance<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async create(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/${productId}`,
			method: 'POST',
			data
		})
	},

	async update(reviewId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/${reviewId}`,
			method: 'PUT',
			data
		})
	},

	async delete(reviewId: string | number) {
		return instance({
			url: `${REVIEWS}/${reviewId}`,
			method: 'DELETE'
		})
	}
}
