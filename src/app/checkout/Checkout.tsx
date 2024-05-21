'use client'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { OrderService } from '@/services/order.service'
import { IProduct, IProducts } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import {
	Button,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import CheckoutItem from './CheckoutItem'

const Checkout: FC<{ products: IProduct[] | IProducts[] }> = ({
	products = []
}) => {
	const { items, total } = useCart()

	const { reset } = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['create order and payment'],
		mutationFn: () =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		onSuccess({ data }) {
			reset()
			push(data.confirmation.confirmation_url)
		}
	})

	return (
		<section className='container'>
			{items.length ? (
				<Grid
					templateAreas={`"header header"
        "products aside"`}
					templateColumns='1fr 0.5fr'
					gap='6'
				>
					<GridItem area='header'>
						<Heading>There are {items.length} products in the basket</Heading>
					</GridItem>
					<GridItem area='products'>
						<Flex flexDirection='column' gap='6'>
							{items.map(item => (
								<CheckoutItem
									key={item.id}
									product={item.product}
									itemId={item.id}
									commonPrice={item.price * item.quantity}
								/>
							))}
						</Flex>
					</GridItem>
					<GridItem area='aside'>
						<Flex mb='4' justifyContent='space-between'>
							<Heading>Итого:</Heading>
							<Heading>{convertPrice(total)}</Heading>
						</Flex>
						<Divider />

						<Button
							mt='4'
							colorScheme='orange'
							w='full'
							size='lg'
							onClick={() => mutate()}
						>
							Place order
						</Button>
					</GridItem>
				</Grid>
			) : (
				<Heading>Not Products</Heading>
			)}
		</section>
	)
}

export default Checkout
