import Heading from '@/ui/Heading'
import Layout from '@/ui/layout/Layout'
import Link from 'next/link'
import { FC } from 'react'

export const NotFound: FC = () => {
	return (
		<Layout>
			<Heading>Not Found</Heading>
			<p>Cloud not find requested resource</p>
			<p>
				View
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</Layout>
	)
}

export default NotFound
