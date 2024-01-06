import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import SquareButton from '@/ui/button/SquareButton'
import { convertPrice } from '@/utils/convertPrice'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()

	const { push } = useRouter()

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
			/>

			<div
				className={cn(
					'absolute top-[4.2rem] 2w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
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
			</div>
		</div>
	)
}
