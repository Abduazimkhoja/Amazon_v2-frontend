'use client'
import { useCart } from '@/hooks/useCart'
import SquareButton from '@/ui/button/SquareButton'
import { Tooltip } from '@chakra-ui/react'

import Link from 'next/link'
import type { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const Cart: FC = () => {
	const { length } = useCart()

	return (
		<Tooltip label='Cart'>
			<Link href='/checkout' className='relative'>
				<SquareButton Icon={RiShoppingCartLine} number={length} />
			</Link>
		</Tooltip>
	)
}

export default Cart
