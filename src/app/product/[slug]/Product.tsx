'use client'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

const Product: FC<IProductPage> = ({
	initialProduct,
	similarProducts,
	slug = ''
}) => {
	const { data: product } = useQuery({
		queryKey: ['get product', initialProduct.id],
		queryFn: () => ProductService.getBySlug(slug),
		initialData: initialProduct,
		enabled: !!slug
	})

	return (
		<>
			<Heading className='mb-1'>{product.name}</Heading>
		</>
	)
}

export default Product
