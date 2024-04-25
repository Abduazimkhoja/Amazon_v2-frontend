import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import type { FC } from 'react'
import styles from '../cart.module.scss'
import CartActions from './cart-action/cartAction'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { images, name, price } = item.product
	return (
		<div className={styles.item}>
			<Image src={images[0]} width={100} height={100} alt={name} />
			<div className='whitespace-nowrap overflow-hidden'>
				<div className={styles.name}>{name}</div>
				<div className={styles.price}>{convertPrice(price)}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
