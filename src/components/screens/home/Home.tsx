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
				{!user && (
					<Button option='orange' onClick={() => router.push('/auth')}>
						Sign In
					</Button>
				)}

				<CatalogPagination title='Fresh products' data={{ products, length }} />
			</Layout>
		</Meta>
	)
}

export default Home
