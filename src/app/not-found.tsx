'use client'

import Heading from '@/ui/Heading'
import Link from 'next/link'
import type { FC } from 'react'

export const NotFound: FC = () => {
	return (
		<>
			<Heading>Not Found</Heading>
			<p>Cloud not find requested resource</p>
			<p>
				View
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</>
	)
}

export default NotFound
