'use client'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct, IProducts } from '@/types/product.interface'
import { IconButton } from '@chakra-ui/react'
import type { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

const AddToCartButton: FC<{ product: IProduct | IProducts }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	const toggleCart = () => {
		if (currentElement) return removeFromCart({ id: currentElement.id })
		return addToCart({ product, quantity: 1, price: product.price })
	}

	const icon = currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />

	return (
		<IconButton
			bg='transparent'
			onClick={toggleCart}
			className='text-secondary'
			aria-label='Search database'
			icon={icon}
		/>
	)
}

export default AddToCartButton
