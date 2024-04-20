'use client'
import { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

const Orders: FC = () => {
	const { data, isFetching, mutate } = useAdminOrders()

	return (
		<>
			<Heading className='mb-7'>Orders</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Orders
