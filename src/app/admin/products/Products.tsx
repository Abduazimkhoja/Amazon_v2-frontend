'use client'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import type { FC } from 'react'
import { useAdminProducts } from './useAdminProducts'

const Products: FC = () => {
	const { data, isFetching, mutate } = useAdminProducts()

	return (
		<>
			<Flex justifyContent='space-between'>
				<Heading className='mb-7'>Products</Heading>
				<Button colorScheme='green' size='lg'>
					<Link href='/products/create'>Create product</Link>
				</Button>
			</Flex>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Products
