import { EnumProductSort } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className='text-right mb-5'>
			<select 
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className='appearance-none capitalize py-1 px-2 bg-white rounded-md'
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => (
					<option key={key} value={EnumProductSort[key]}>
						{EnumProductSort[key]}
					</option>
				))}
			</select>
		</div>
	)
}

export default SortDropdown
