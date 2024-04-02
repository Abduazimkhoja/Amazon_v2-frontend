'use client'
import { UserService } from '@/services/user.service'
import { IFullUser } from '@/types/user.interface'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAction'

export const useProfile = () => {
	const { user } = useAuth()

	const { data } = useQuery<IFullUser, Error>({
		queryKey: ['get profile'],
		queryFn: async () => {
			try {
				const response = await UserService.getProfile()
				return response.data
			} catch (error) {
				console.log(error)
				throw new Error('Failed to fetch profile data')
			}
		},
		enabled: !!user
	})

	return { profile: data }
}
