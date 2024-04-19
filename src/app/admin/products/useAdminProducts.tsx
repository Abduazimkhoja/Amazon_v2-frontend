'use client'
import { getAdminUrl } from '@/config/url.config'
import { ProductService } from '@/services/product/product.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { formatDate } from '@/utils/fromat-date'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin product'],
		queryFn: () => ProductService.getAll(),
		select: data =>
			data.products.map((product): IListItem => {
				return {
					id: product.id,
					viewUrl: `/product/${product.slug}`,
					editUrl: getAdminUrl(`/products/edit/${product.id}`),
					items: [
						product.name,
						product.category.name,
						formatDate(product.createdAt)
					]
				}
			})
	})

	const { mutate } = useMutation({
		mutationKey: ['delete product'],
		mutationFn: (id: number) => ProductService.delete(id),
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
// 3/27/31