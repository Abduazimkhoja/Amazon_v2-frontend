import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='flex flex-col gap-1 absolute top-2 right-3 z-10'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>

				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
						className='w-full brightness-50 hover:brightness-100'
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mt-2 font-semibold line-clamp-1'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<h4 className='text-2xl font-semibold'>{convertPrice(product.price)}</h4>
		</div>
	)
}

export default ProductItem
