import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { OrderService } from '@/services/order.service'
import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import { convertPrice } from '@/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'

const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Meta title='MyOrders'>
			<Layout>
				<Heading>My Orders!</Heading>

				<section>
					{orders?.length ? (
						orders?.map(order => (
							<div
								key={order.id}
								className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'
							>
								<span>{order.id}</span>
								<span>{order.status}</span>
								<span>
									{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
								</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					) : (
						<div>Order not found!</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}

MyOrdersPage.isOnlyUser = true
export default MyOrdersPage
