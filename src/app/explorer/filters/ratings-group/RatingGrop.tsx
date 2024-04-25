import Checkbox, { ICheckbox } from '@/ui/checkbox/Checkbox'
import type { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'
import { RATING_VARIANTS } from './ratings-variants.data'
import { updateRatingsQuery } from './update-ratings-query'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	const checkboxProps = (rating: number) => {
		const ratingStr = rating.toString()
		return {
			key: rating,
			className: 'mb-2 text-sm',
			isChecked: queryParams.ratings?.includes(ratingStr),
			onClick: () =>
				updateQueryParams(
					'ratings',
					updateRatingsQuery(queryParams.ratings, ratingStr)
				)
		} as ICheckbox
	}

	const ratingProps = {
		readonly: true,
		SVGstyle: { display: 'inline-block' },
		size: 20,
		transition: true
	}

	return (
		<FilterWrapper title='Number of reviews'>
			{RATING_VARIANTS.map(rating => (
				<Checkbox {...checkboxProps(rating)}>
					<Rating initialValue={rating} {...ratingProps} />
				</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default RatingGroup
