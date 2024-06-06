'use client'

import { useCategories } from '@/hooks/queries/useCategories'
import Loader from '@/ui/Loader'
import { Grid, Radio, RadioGroup } from '@chakra-ui/react'
import type { FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data: categories, isLoading } = useCategories()

	if (isLoading || !categories?.length) {
		return (
			<FilterWrapper title='Category'>
				{isLoading && <Loader />}
				{!categories?.length && <p>Category not found</p>}
			</FilterWrapper>
		)
	}

	const handleChange = (categoryId: string) => {
		if (categoryId == 'all') return updateQueryParams('categoryId', '')
		const isChecked = queryParams.categoryId === categoryId
		updateQueryParams('categoryId', isChecked ? '' : categoryId)
	}

	return (
		<FilterWrapper title='Category'>
			<RadioGroup
				onChange={handleChange}
				value={queryParams.categoryId || 'all'}
			>
				<Grid templateColumns='1fr 1fr 1fr' gap='2'>
					<Radio value={'all'}>All</Radio>
					{categories.map(category => (
						<Radio key={category.id} value={String(category.id)}>
							{category.name}
						</Radio>
					))}
				</Grid>
			</RadioGroup>
		</FilterWrapper>
	)
}

export default CategoryGroup
