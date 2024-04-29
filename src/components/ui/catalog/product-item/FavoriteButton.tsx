'use client'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { IconButton } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	if (!profile) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	const icon = isExists ? <AiFillHeart /> : <AiOutlineHeart />

	return (
		<IconButton
			bg='transparent'
			onClick={() => {
				mutate()
			}}
			aria-label='Search database'
			icon={icon}
		/>
	)
}

export default FavoriteButton
