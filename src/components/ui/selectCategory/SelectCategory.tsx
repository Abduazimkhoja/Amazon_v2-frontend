'use client'
import { ICategory } from '@/types/category.interface'
import { Select, SelectProps } from '@chakra-ui/react'
import { ChangeEvent, forwardRef, useState } from 'react'

interface SelectCategoryProp extends SelectProps {
	categories: ICategory[]
	onCategorySelect?: (id: number) => void
}

const SelectCategory = forwardRef<HTMLSelectElement, SelectCategoryProp>(
	({ onCategorySelect, categories, ...rest }, ref) => {
		const [selectedValue, setSelectedValue] = useState<number>(categories[0].id)

		const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
			const select = Number(event.target.value)

			setSelectedValue(select)
			if (onCategorySelect) onCategorySelect(select)
		}

		return (
			<Select
				{...rest}
				ref={ref}
				zIndex='1'
				onChange={event => selectChange(event)}
				value={selectedValue}
				title='Select category'
			>
				{categories.map(category => {
					return (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					)
				})}
			</Select>
		)
	}
)

export default SelectCategory
