'use client'
import { getAdminUrl } from '@/config/url.config'
import { ReviewService } from '@/services/review.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminReviews = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin review'],
		queryFn: () => ReviewService.getAll(),
		select: ({ data }) =>
			data.map((review): IListItem => {
				return {
					id: review.id,
					viewUrl: `/reviews/${review.id}`,
					editUrl: getAdminUrl(`/reviews/edit/${review.id}`),
					items: [
						`${review.id}`,
						Array.from({ length: review.rating })
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
