import { TypePaginationProducts } from '@/types/product.interface'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<>
			<CatalogPagination title='Fresh products' data={{ products, length }} />
		</>
	)
}

export default Home
