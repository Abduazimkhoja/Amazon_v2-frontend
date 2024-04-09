import { useCategories } from '@/hooks/queries/useCategories'
import Loader from '@/ui/Loader'
import Checkbox from '@/ui/checkbox/Checkbox'
import { FC } from 'react'
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
		}
	}

	return (
		<FilterWrapper title='Category'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data?.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()

					return <Checkbox>{category.name}</Checkbox>
				})
			) : (
				<p>Category not found</p>
			)}
		</FilterWrapper>
	)
}

export default CategoryGroup
