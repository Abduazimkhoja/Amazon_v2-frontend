'use client'
import { useCart } from '@/hooks/useCart'
import SquareButton from '@/ui/button/SquareButton'

import Link from 'next/link'
import type { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const Cart: FC = () => {
	// const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()

	return (
		// <div className='relative' ref={ref}>
		<Link href='/checkout' className='relative'>
			<SquareButton
				Icon={RiShoppingCartLine}
				// onClick={() => {
				// 	setIsShow(!isShow)
				// }}
				number={items.length}
			/>
		</Link>
		// 	{isShow && (
		// 		<div className={styles.cartWrapper}>
		// 			<div className='font-normal text-lg mb-5'>My cart</div>

		// 			<div className={styles.cart}>
		// 				{items.length ? (
		// 					cartList.map(item => <CartItem item={item} key={item.id} />)
		// 				) : (
		// 					<div className='font-light'>Cart is empty!</div>
		// 				)}
		// 			</div>

		// 			<div className={styles.footer}>
		// 				<div>Total:</div>
		// 				<div>{convertPrice(total)}</div>
		// 			</div>

		// 			{!!items.length && (
		// 				<div className='text-center mt-7 mb5'>
		// 					<Link
		// 						className='btn btn-white'
		// 						href='/checkout'
		// 						onClick={() => setIsShow(false)}
		// 					>
		// 						Go to checkout
		// 					</Link>
		// 				</div>
		// 			)}
		// 		</div>
		// 	)}
		// </div>
	)
}

export default Cart
