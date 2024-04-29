'use client'
import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import type { FC } from 'react'
import styles from '../cart.module.scss'
import CartActions from './cart-action/cartAction'
import { convertImageUrl } from '@/utils/convert-image-url'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { images, name, price } = item.product
	return (
		<div className={styles.item}>
			<Image
				src={convertImageUrl(images)}
				width={100}
				height={100}
				alt={name}
			/>
			<div className='whitespace-nowrap overflow-hidden'>
				<div className={styles.name}>{name}</div>
				<div className={styles.price}>{convertPrice(price)}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
