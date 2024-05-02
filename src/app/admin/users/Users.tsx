'use client'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import type { FC } from 'react'
import { useAdminUsers } from './useAdminUsers'

const Users: FC = () => {
	const { data, isFetching } = useAdminUsers()

	return (
		<>
			<Heading className='mb-7'>Users</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}

export default Users
