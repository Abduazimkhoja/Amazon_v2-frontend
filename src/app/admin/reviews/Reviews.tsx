'use client'
import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'
import { useAdminReviews } from './useAdminReviews'

const Reviews: FC = () => {
	const { data, isFetching, mutate } = useAdminReviews()

	return (
		<>
			<Heading className='mb-7'>Reviews</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Reviews
