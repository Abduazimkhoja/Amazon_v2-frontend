'use client'
import { useCart } from '@/hooks/useCart'
import SquareButton from '@/ui/button/SquareButton'

import Link from 'next/link'
import type { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const Cart: FC = () => {
	const { items } = useCart()

	return (
		<Link href='/checkout' className='relative'>
			<SquareButton Icon={RiShoppingCartLine} number={items.length} />
		</Link>
	)
}

export default Cart
