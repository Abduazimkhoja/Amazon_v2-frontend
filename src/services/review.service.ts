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
	async getById(id: string | number) {
		return instance<IReview>({
			url: `${REVIEWS}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IReview>({
			url: `${REVIEWS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IReview>({
			url: REVIEWS,
			method: 'POST'
		})
	},

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	},

	async delete(id: string | number, name: string) {
		return instance<IReview>({
			url: `${REVIEWS}/${id}`,
			method: 'DELETE'
		})
	}
}
