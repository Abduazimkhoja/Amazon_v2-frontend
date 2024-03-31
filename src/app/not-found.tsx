import Heading from '@/ui/Heading'
import Link from 'next/link'
import { FC } from 'react'
import Layout from '@/app/layout'

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
