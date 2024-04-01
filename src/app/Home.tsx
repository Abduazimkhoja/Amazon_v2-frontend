import { TypePaginationProducts } from '@/types/product.interface'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Catalog title='Fresh products' products={products} />
		</>
	)
}

export default Home
