import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data
	})

	return {profile: data}
}
