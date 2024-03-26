import { useAuth } from '@/hooks/useAction'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useAuthREdirect = () => {
	const { user } = useAuth()

	const { replace } = useRouter()

	useEffect(() => {
		user && replace('/')
	}, [user])
}
