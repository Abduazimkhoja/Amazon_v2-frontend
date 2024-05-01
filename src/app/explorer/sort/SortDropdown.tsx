'use client'

// import Select from '@/ui/select/Select'
import { Select } from '@chakra-ui/react'
import type { ChangeEvent, FC } from 'react'
import { useFilters } from '../useFilters'
import { SORT_SELECT_DATA } from './sort-select.data'

const SortDropdown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const select = event.target.value

		updateQueryParams('sort', select)
	}

	const selectDefailtValue =
		SORT_SELECT_DATA.find(value => value.key === queryParams.sort)?.key ||
		SORT_SELECT_DATA[0].key

	return (
		<div className='text-right z-10'>
			<Select
				zIndex='1'
				onChange={event => selectChange(event)}
				value={selectDefailtValue}
				title='Sort by'
			>
				{SORT_SELECT_DATA.map(item => {
					return (
						<option key={item.key} value={item.key}>
							{item.label}
						</option>
					)
				})}
			</Select>
		</div>
	)
}

export default SortDropdown
