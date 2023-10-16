import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton product={product} />

				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
			<h5>{product.category.name}</h5>
			<ProductRating product={product} />
			<h4>{product.price}</h4>
		</div>
	)
}

export default ProductItem