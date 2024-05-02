'use client'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

interface ILogo {
	url?: string
	width?: number
	height?: number
}

const Logo: FC<ILogo> = ({ url, width = 180, height = 60 }) => {
	const { isAdminPanel } = useIsAdminPanel()

	if (isAdminPanel) {
		return (
			<Box paddingBlock='5' paddingInline='6'>
				<Link href='/'>
					<Heading
						size='lg'
						textTransform='uppercase'
						colorScheme='orange'
						textColor='white'
					>
						Admin Panel
					</Heading>
				</Link>
			</Box>
		)
	}

	return (
		<Link href='/'>
			<Image
				className='object-contain w-120 h-auto'
				priority
				width={width}
				height={height}
				src={url ? url : '/images/logo.svg'}
				alt='Amazon v2'
			/>
		</Link>
	)
}

export default Logo
