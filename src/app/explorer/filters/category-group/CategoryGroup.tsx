'use client'

import { useCategories } from '@/hooks/queries/useCategories'
import Loader from '@/ui/Loader'
import Checkbox, { ICheckbox } from '@/ui/checkbox/Checkbox'
import type { FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading } = useCategories()

	const checkboxProps = (categoryId: number) => {
		const categoryIdStr = categoryId.toString()
		const isChecked = queryParams.categoryId === categoryIdStr
		return {
			isChecked: isChecked,
			onClick: () =>
				updateQueryParams('categoryId', isChecked ? '' : categoryIdStr),
			key: categoryId,
			className: 'mb-2 text-sm'
		} as ICheckbox
	}

	if (isLoading) {
		return (
			<FilterWrapper title='Category'>
				<Loader />
			</FilterWrapper>
		)
	}

	const getCategoryCheckboxList = () => {
		if (!data?.length) return <p>Category not found</p>

		const checkboxList = data?.map(category => (
			<Checkbox {...checkboxProps(category.id)}>{category.name}</Checkbox>
		))

		return checkboxList
	}

	return (
		<FilterWrapper title='Category'>{getCategoryCheckboxList()}</FilterWrapper>
	)
}

export default CategoryGroup
