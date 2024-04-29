'use client'
import { IProduct, IProducts } from '@/types/product.interface'
import { convertImageUrl } from '@/utils/convert-image-url'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './Checkout.module.scss'

const CheckoutItem: FC<{ product: IProduct | IProducts }> = ({ product }) => {
	const { images, name, category, price } = product

	return (
		<div className={styles.item}>
			<Image
				src={convertImageUrl(images)}
				width={100}
				height={100}
				alt={name}
			/>
			<div className={styles.row}>
				<div className={styles.information}>
					<div>{name}</div>
					<div>{category.slug}</div>
				</div>
				<div className={styles.price}>{convertPrice(price)}</div>
			</div>
		</div>
	)
}

export default CheckoutItem
