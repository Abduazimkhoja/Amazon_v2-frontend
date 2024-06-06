'use client'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { useEffect, type FC } from 'react'

const CartActions: FC<{ productId: number }> = ({ productId }) => {
	const { changeQuantity } = useActions()
	const { items } = useCart()

	const quantity =
		items.find(cartItem => cartItem.id === productId)?.quantity || 1

	const {
		valueAsNumber,
		getInputProps,
		getIncrementButtonProps,
		getDecrementButtonProps
	} = useNumberInput({
		defaultValue: quantity,
		min: 1,
		max: 10
	})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	useEffect(() => {
		if (isNaN(valueAsNumber)) return undefined
		changeQuantity({
			id: productId,
			type: 'assign',
			value: valueAsNumber
		})
	}, [valueAsNumber])

	return (
		<HStack maxW='320px'>
			<Button {...dec}>-</Button>
			{quantity}
			<Input w='16' textAlign='center' {...input} />
			<Button {...inc}>+</Button>
		</HStack>
	)
}

export default CartActions
