'use client'
import { IProducts } from '@/types/product.interface'
import { arrayGenerator } from '@/utils/array-generator'
import { calcProductRating } from '@/utils/calc-product-rating'
import { convertImageUrl } from '@/utils/convert-image-url'
import { convertPrice } from '@/utils/convertPrice'
import { Box, Divider, Heading, Image, Text, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import type { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'

const ProductItem: FC<{ product: IProducts }> = ({ product }) => {
	const { id, slug, images, name, category, price, reviews } = product
	const productRating = calcProductRating(reviews)
	const emptyArray = arrayGenerator(5)

	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Box position='relative'>
				<Link href={`/product/${slug}`}>
					<Image src={convertImageUrl(images)} alt={name} />
				</Link>
				<Box position='absolute' top={1} right={1}>
					<FavoriteButton productId={id} />
					<AddToCartButton product={product} />
				</Box>
			</Box>

			<Box>
				<Box paddingInline='6' paddingBlock='3'>
					<Tooltip label={name} aria-label='A tooltip'>
						<Link className='flex-1' href={`/product/${slug}`}>
							<Heading
								mt='1'
								fontWeight='semibold'
								lineHeight='tight'
								size='md'
								noOfLines={1}
							>
								{name}
							</Heading>
						</Link>
					</Tooltip>
					<Tooltip label={category.slug} aria-label='A tooltip'>
						<Link href={`/category/${category.slug}`}>
							<Box
								display='inline'
								color='gray.500'
								fontWeight='semibold'
								letterSpacing='wide'
								fontSize='xs'
								textTransform='uppercase'
							>
								{category.slug}
							</Box>
						</Link>
					</Tooltip>

					<Box display='flex' mt='2' alignItems='center'>
						{emptyArray.map((_, i) => (
							<AiFillStar
								key={i}
								className={i < productRating ? 'text-primary' : 'text-gray'}
							/>
						))}
						<Box as='span' ml='2' color='gray.600' fontSize='sm'>
							{reviews.length} reviews
						</Box>
					</Box>
				</Box>
				<Divider />
				<Text
					paddingBlock='2'
					paddingInline='6'
					fontWeight='600'
					fontSize='2xl'
					textAlign='right'
				>
					{convertPrice(price)}
				</Text>
			</Box>
		</Box>
	)
}

export default ProductItem
