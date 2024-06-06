import { TypePaginationProducts } from '@/types/product.interface'
import Carousel from '@/ui/carousel/Carousel'
import Catalog from '@/ui/catalog/Catalog'
import Offer from '@/ui/catalog/Offer'
import type { FC } from 'react'
import { carouselItems } from './carouse.data'
import { ICategoryProduct } from '@/types/category.interface'

const Home: FC<{
	products: TypePaginationProducts
	categoryProducts: ICategoryProduct[]
}> = ({ products, categoryProducts }) => {
	return (
		<>
			{/* <Carousel items={carouselItems} className='mb-10' /> */}
			<Catalog title='Fresh products' products={products.products} />
			{categoryProducts.map((offerProduct) => {
				return <Offer {...offerProduct}/>
			})}
		</>
	)
}

export default Home
