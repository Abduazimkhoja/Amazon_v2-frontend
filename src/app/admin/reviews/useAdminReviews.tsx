'use client'
import { getAdminUrl } from '@/config/url.config'
import { ReviewService } from '@/services/review.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { arrayGenerator } from '@/utils/array-generator'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminReviews = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin review'],
		queryFn: () => ReviewService.getAll(),
		select: ({ data }) =>
			data.map((review): IListItem => {
				return {
					id: review.id,
					viewUrl: `/admin/reviews/${review.id}`,
					editUrl: getAdminUrl(`/admin/reviews/edit/${review.id}`),
					items: [
						`${review.id}`,
						arrayGenerator(review.rating)
							.map(() => '⭐')
							.join(' ') || '0',
						review.user.name
					]
				}
			})
	})

	const { mutate } = useMutation({
		mutationKey: ['delete review'],
		mutationFn: (reviewId: number) => ReviewService.delete(reviewId),
		onSuccess() {
			refetch()
		}
	})

	return {
		mutate,
		data,
		isFetching
	}
}
