'use client'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()
	const queryClient = useQueryClient()
	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	const isExists = profile?.favorites.some(
		favorite => favorite.id === productId
	)

	const icon = isExists ? (
		<AiFillHeart className='text-red' />
	) : (
		<AiOutlineHeart className='text-red' />
	)

	return (
		<Tooltip label='Add to favorite'>
			<IconButton
				bg='transparent'
				onClick={() => {
					!!profile ? mutate() : push('/auth')
				}}
				aria-label='Search database'
				icon={icon}
			/>
		</Tooltip>
	)
}

export default FavoriteButton
