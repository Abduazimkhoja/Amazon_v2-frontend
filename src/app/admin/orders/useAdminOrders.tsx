'use client'
import { getAdminUrl } from '@/config/url.config'
import { OrderService } from '@/services/order.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { convertPrice } from '@/utils/convertPrice'
import { formatDate } from '@/utils/fromat-date'
import { useQuery } from '@tanstack/react-query'

export const useAdminOrders = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin order'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) =>
			data.map((order): IListItem => {
				return {
					id: order.id,
					viewUrl: getAdminUrl(`/orders/${order.id}`),
					items: [
						`# ${order.id}`,
						order.status,
						formatDate(order.createdAt),
						convertPrice(order.total)
					]
				}
			})
	})

	return {
		data,
		isFetching
	}
}
