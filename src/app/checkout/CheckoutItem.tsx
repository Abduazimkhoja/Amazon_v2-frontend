'use client'
import { useActions } from '@/hooks/useActions'
import { IProduct, IProducts } from '@/types/product.interface'
import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'
import { convertImageUrl } from '@/utils/convert-image-url'
import { convertPrice } from '@/utils/convertPrice'
import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	IconButton,
	Text,
	Tooltip,
	Wrap
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { BiTrash } from 'react-icons/bi'
import CartActions from '../layout/header/cart/cart-item/cart-action/cartAction'

const CheckoutItem: FC<{
	product: IProduct | IProducts
	itemId: number
	commonPrice: number
}> = ({ itemId, product, commonPrice }) => {
	const { id, images, name, category, price, slug } = product
	const { removeFromCart } = useActions()

	return (
		<Flex border='1px' borderColor='blackAlpha.100'>
			<Wrap minW='140px' maxW='180px'>
				<Image
					width={180}
					height={200}
					className='w-full h-auto object-cover'
					src={convertImageUrl(images)}
					alt={name}
				/>
			</Wrap>
			<Flex flexDirection='column' justifyContent='space-between' flex='1'>
				<Center
					flex='1'
					gap='3'
					paddingInline='7'
					paddingBlock='4'
					justifyContent='space-between'
				>
					<Box paddingBlock='2'>
						<Link className='flex-1' href={`/product/${slug}`}>
							<Heading
								mb='2'
								fontWeight='semibold'
								lineHeight='tight'
								size='md'
								noOfLines={1}
							>
								<Tooltip label={name} aria-label='A tooltip'>
									{name}
								</Tooltip>
							</Heading>
						</Link>
						<Link href={`/category/${category.slug}`}>
							<Text
								color='gray.500'
								fontWeight='semibold'
								letterSpacing='wide'
								fontSize='xs'
								textTransform='uppercase'
							>
								<Tooltip label={category.slug} aria-label='A tooltip'>
									{category.slug}
								</Tooltip>
							</Text>
						</Link>
					</Box>
					<Flex gap='2'>
						<FavoriteButton productId={id} />
						<Tooltip label='Remove product' aria-label='A tooltip'>
							<IconButton
								aria-label='remove cart item'
								icon={<BiTrash />}
								onClick={() => removeFromCart({ id: itemId })}
							/>
						</Tooltip>
					</Flex>
				</Center>

				<Divider />

				<Center
					gap='3'
					paddingInline='7'
					paddingBlock='4'
					justifyContent='space-between'
				>
					<CartActions itemId={itemId} />

					<Text paddingBlock='2' fontWeight='600' fontSize='2xl'>
						{convertPrice(commonPrice)}
					</Text>
				</Center>
			</Flex>
		</Flex>
	)
}

export default CheckoutItem
