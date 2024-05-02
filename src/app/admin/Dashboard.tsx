'use client'
import { StatisticService } from '@/services/statistics.service'
import Heading from '@/ui/Heading'
import { arrayGenerator } from '@/utils/array-generator'
import { convertPrice } from '@/utils/convertPrice'
import {
	Box,
	SkeletonText,
	Stat,
	StatGroup,
	StatLabel,
	StatNumber
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

const SkeletonDashboard = (key: number) => {
	return (
		<Stat key={key} padding='6' boxShadow='lg' bg='white' borderRadius='15'>
			<SkeletonText noOfLines={1} skeletonHeight='3' />
			<SkeletonText mt='2' noOfLines={1} skeletonHeight='5' />
		</Stat>
	)
}

const Dashboard: FC = () => {
	const { data, isFetching, error } = useQuery({
		queryKey: ['statistics'],
		queryFn: () => StatisticService.getMain(),
		select: ({ data }) => data
	})

	const array = arrayGenerator(4)

	if (error) return <Box children='error' />
	return (
		<>
			<Heading className='mb-8'>Dashboard</Heading>
			<StatGroup gap='5'>
				{isFetching ? (
					array.map((_, i) => SkeletonDashboard(i))
				) : data?.length ? (
					data.map(item => (
						<Stat
							key={item.name}
							paddingBlock='4'
							paddingInline='6'
							boxShadow='lg'
							bg='white'
							borderRadius='15'
						>
							<StatLabel>{item.name}</StatLabel>
							<StatNumber>
								{item.name.toLowerCase().includes('total')
									? convertPrice(item.value || 0)
									: item.value}
							</StatNumber>
						</Stat>
					))
				) : (
					<div>Statistics not loaded!</div>
				)}
			</StatGroup>
		</>
	)
}

export default Dashboard
