'use client'
import { StatisticService } from '@/services/statistics.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['statistics'],
		queryFn: () => StatisticService.getMain(),
		select: ({ data }) => data
	})

	return <div>Dashboard</div>
}

export default Dashboard
