'use client'
import { useDebounce } from '@/hooks/useDebounce'
import {
	Box,
	Flex,
	NumberInput,
	NumberInputField,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack
} from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

export interface IRange {
	min?: number
	max: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: string) => void
	onChangeToValue: (value: string) => void
}

export const Range: FC<IRange> = ({
	min = 1,
	max,
	fromInitialValue,
	toInitialValue,
	onChangeFromValue,
	onChangeToValue
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)
	const handleChange = (value: number[]) => {
		setFromValue(value[0].toString())
		setToValue(value[1].toString())
	}

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])

	return (
		<Box>
			<Flex gap='4' mb='2'>
				<NumberInput
					onChange={value => setFromValue(value)}
					value={fromValue}
					min={min}
					max={max}
					_placeholder='From'
				>
					<NumberInputField bg='white' />
				</NumberInput>
				<NumberInput
					onChange={value => setToValue(value)}
					value={toValue}
					min={min}
					max={max}
					_placeholder='To'
				>
					<NumberInputField bg='white' />
				</NumberInput>
			</Flex>
			<RangeSlider
				min={min}
				max={max}
				focusThumbOnChange={false}
				value={[+fromValue, +toValue]}
				onChange={handleChange}
				aria-label={['min', 'max']}
			>
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSlider>
		</Box>
	)
}

export default Range
