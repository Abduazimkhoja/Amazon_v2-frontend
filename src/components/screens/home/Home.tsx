import { TypeProducts } from '@/types/product.interface'
import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/catalog'
import { FC } from 'react'

const Home: FC<TypeProducts> = ({ products }) => {
	return (
		<Meta title='Home'>
			<Catalog products={products} />
		</Meta>
	)
}

export default Home
