'use client'

import { EnumProductSort } from '@/services/product/product.types'
import Select from '@/ui/select/Select'
import type { FC } from 'react'
import { useFilters } from '../useFilters'
import { SORT_SELECT_DATA } from './sort-select.data'

const SortDropdown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<div className='text-right z-10'>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
				title='Sort by'
			/>
		</div>
	)
}

export default SortDropdown
