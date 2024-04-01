'use client'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { OrderService } from '@/services/order.service'
import SquareButton from '@/ui/button/SquareButton'
import { convertPrice } from '@/utils/convertPrice'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import CartItem from './cart-item/CartItem'
import styles from './cart.module.scss'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()

	// const { reset } = useActions()

	// const { push } = useRouter()

	// const { mutate } = useMutation({
	// 	mutationKey: ['create order and payment'],
	// 	mutationFn: () =>
	// 		OrderService.place({
	// 			items: items.map(item => ({
	// 				price: item.price,
	// 				quantity: item.quantity,
	// 				productId: item.product.id
	// 			}))
	// 		}),

	// 	onSuccess({ data }) {
	// 		reset()
	// 		push(data.confirmation.confirmation_url)
	// 	}
	// })

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>
			{isShow && (
				<div className={styles.cartWrapper}>
					<div className='font-normal text-lg mb-5'>My cart</div>

					<div className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className='font-light'>Cart is empty!</div>
						)}
					</div>

					<div className={styles.footer}>
						<div>Total:</div>
						<div>{convertPrice(total)}</div>
					</div>

					{!!items.length && (
						<div className='text-center mt-7 mb5'>
							<Link className='btn btn-white' href='/checkout'>
								Go to checkout
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
