import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { id, slug, images, name, category, price } = product

	return (
		<div className='animate-scaleIn'>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='flex gap-3 absolute top-2 right-3 z-1 bg- p-2 rounded-full bg-white shadow'>
					<FavoriteButton productId={id} />
					<AddToCartButton product={product} />
				</div>

				<Link href={`/product/${slug}`}>
					<Image
						width={250}
						height={250}
						src={images[0]}
						alt={name}
						className='block mx-auto'
						priority
					/>
				</Link>
			</div>
			<Link href={`/product/${slug}-${id}`}>
				<h3 title={name} className='mt-2 font-semibold line-clamp-1'>
					{name}
				</h3>
			</Link>
			<Link
				href={`/category/${category.slug}`}
				className='text-aqua text-xs mb-2'
			>
				{category.name}
			</Link>
			<ProductRating product={product} isText />
			<h4 className='text-2xl font-semibold'>{convertPrice(price)}</h4>
		</div>
	)
}

export default ProductItem
