import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { TypePaginationProducts } from '@/types/product.interface'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	const router = useRouter()

	return (
		<Meta title='Home'>
			<Layout>
				{!user ? (
					<Button option='orange' onClick={() => router.push('/auth')}>
						Sign In
					</Button>
				) : (
					<Button option='orange' onClick={() => logout()}>
						Logout
					</Button>
				)}

				<CatalogPagination title='Fresh products' data={{products, length}} />
				{/* <img
					src='https://qrtag.net/api/qr_transparent_6.svg?url=https://www.qrtag.net'
					alt='qrtag'
					
				/>
				<img src="https://api.qrserver.com/v1/create-qr-code/?data=youtube.com&size=100x100&format=svg&color=f00" alt="" title="" /> */}
			</Layout>
		</Meta>
	)
}

export default Home
