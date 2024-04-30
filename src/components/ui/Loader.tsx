'use client'
import { Spinner } from '@chakra-ui/react'
import type { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<Spinner color='orange.600' size='xl' thickness='4px' />
		</div>
	)
}

export default Loader
