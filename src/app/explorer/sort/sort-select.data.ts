// export cosnt SORT_SELECT_DATA: ISelect

import { EnumProductSort } from '@/services/product/product.types'
import { ISelectItem } from '@/ui/select/select.interface'

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.HIGHT_PRICE,
		label: 'High price'
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: 'Low price'
	},
	{
		key: EnumProductSort.NEWEST,
		label: 'Newest'
	},
	{
		key: EnumProductSort.OLDEST,
		label: 'Oldest'
	}
]
