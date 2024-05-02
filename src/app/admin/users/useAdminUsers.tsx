'use client'
import { getAdminUrl } from '@/config/url.config'
import { UserService } from '@/services/user.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { useQuery } from '@tanstack/react-query'

export const useAdminUsers = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['get admin user'],
		queryFn: () => UserService.getAll(),
		select: ({ data }) =>
			data.map((user): IListItem => {
				return {
					id: user.id,
					viewUrl: `/users/${user.id}`,
					editUrl: getAdminUrl(`/users/edit/${user.id}`),
					items: [
						`${user.id}`,
						user.avatarPath,
						user.name,
						user.email,
						user.phone
					]
				}
			})
	})

	return {
		data,
		isFetching
	}
}
