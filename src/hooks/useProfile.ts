import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAction'

export const useProfile = () => {
	const { user } = useAuth()
	const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data,
		onError: error => {
			console.log(error)
		},
		enabled: !!user
	})

	return { profile: data }
}
