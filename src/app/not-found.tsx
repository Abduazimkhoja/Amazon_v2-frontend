'use client'

import Heading from '@/ui/Heading'
import { Center } from '@chakra-ui/react'
import Link from 'next/link'
import type { FC } from 'react'

export const NotFound: FC = () => {
	return (
		<Center h='full' className='container' flexDirection='column' gap='3'>
			<Heading>Not Found</Heading>
			<p>Cloud not find requested resource</p>
			<p>
				View
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</Center>
	)
}

export default NotFound
