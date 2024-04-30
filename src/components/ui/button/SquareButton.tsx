'use client'
import { Button, Tag } from '@chakra-ui/react'
import { type FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<Button
			size='lg'
			onClick={onClick}
			leftIcon={<Icon />}
			colorScheme='orange'
		>
			Cart
			{!!number && (
				<Tag ml='2' size='md' colorScheme='red'>
					{number}
				</Tag>
			)}
		</Button>
	)
}

export default SquareButton
