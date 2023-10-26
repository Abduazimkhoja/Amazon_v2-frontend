import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { TypePaginationProducts } from '@/types/product.interface'
import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
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
				{!!user && <button onClick={() => logout()}>Logout</button>}
				{!user && <button onClick={() => router.push('/auth')}>Sign In</button>}

				<Catalog
					title='Fresh products'
					products={products || []}
					isPagination
				/>
			</Layout>
		</Meta>
	)
}

export default Home
