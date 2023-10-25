import { EnumProductSort } from '@/services/product/product.types'
import { FC } from 'react'

const SortDropdown: FC = () => {
	return (
		<div className='text-right mb-5'>
			<select className='appearance-none py-1 px-2 bg-white'>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => (
					<option value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
				))}
			</select>
		</div>
	)
}

export default SortDropdown
 