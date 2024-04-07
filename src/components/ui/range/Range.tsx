import { FC, useState } from 'react'

interface IRange {
	min?: number
	max: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: string) => void
	onChangeToValue: (value: string) => void
}

export const Range: FC<IRange> = ({
	min = 0,
	max,
	fromInitialValue,
	toInitialValue,
	onChangeFromValue,
	onChangeToValue
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, settoValue] = useState(toInitialValue || '')

  

	return <div>Range</div>
}

export default Range
