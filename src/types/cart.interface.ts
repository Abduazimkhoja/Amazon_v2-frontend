import { IProduct, IProducts } from './product.interface'

export interface ICartItem {
	id: number
	product: IProduct | IProducts
	quantity: number
	price: number
}
