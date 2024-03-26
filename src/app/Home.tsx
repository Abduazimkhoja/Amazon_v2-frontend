'use client'
import { useAuth } from '@/hooks/useAction'
import { TypePaginationProducts } from '@/types/product.interface'
import Button from '@/ui/button/Button'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const router = useRouter()

	return (
		<Layout>
			{!user && (
				<Button option='orange' onClick={() => router.push('/auth')}>
					Sign In
				</Button>
			)}

			<CatalogPagination title='Fresh products' data={{ products, length }} />
		</Layout>
	)
}

export default Home
