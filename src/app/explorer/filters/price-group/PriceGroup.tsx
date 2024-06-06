'use client'

import Range, { IRange } from '@/ui/range/Range'
import type { FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	const rangeProps: IRange = {
		max: 10000,
		fromInitialValue: queryParams.minPrice,
		toInitialValue: queryParams.maxPrice,
		onChangeFromValue: value => updateQueryParams('minPrice', value),
		onChangeToValue: value => updateQueryParams('maxPrice', value)
	}

	return (
		<FilterWrapper title='Price from/to'>
			<Range {...rangeProps} />
		</FilterWrapper>
	)
}

export default PriceGroup
