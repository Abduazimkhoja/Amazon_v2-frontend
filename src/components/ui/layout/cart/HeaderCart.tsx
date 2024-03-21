import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import Button from '@/ui/button/Button'
import SquareButton from '@/ui/button/SquareButton'
import { convertPrice } from '@/utils/convertPrice'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import CartItem from './cart-item/CartItem'
import styles from './cart.module.scss'
import { useMutation } from '@tanstack/react-query'
import { OrderService } from '@/services/order.service'
import { useActions } from '@/hooks/useActions'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()
  const {reset} = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		{
			onSuccess({ data }) {
				push(data.confirmation.confirmation_url).then(() => reset())
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>
			<div
				className={cn(
					'absolute top-[4.2rem] w-80 -left-[17.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
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

				<div className='text-center'>
					<Button
						option='white'
						size='sm'
						className='btn-link mt-5 mb-2'
						onClick={() => mutate()}
					>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
