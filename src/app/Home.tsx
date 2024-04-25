import { TypePaginationProducts } from '@/types/product.interface'
import Carousel from '@/ui/carousel/Carousel'
import Catalog from '@/ui/catalog/Catalog'
import type { FC } from 'react'
import { carouselItems } from './carouse.data'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} className='mb-10' />
			<Catalog title='Fresh products' products={products} />
		</>
	)
}

export default Home
