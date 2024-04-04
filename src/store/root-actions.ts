import { carouselSlice } from './carousel/carousel.slice'
import { cartSlice } from './cart/cart.slice'
import { filtersSlice } from './filters/filters.slice'
import * as userAction from './user/user.actions'

export const rootActions = {
	...userAction,
	...cartSlice.actions,
	...carouselSlice.actions,
	...filtersSlice.actions
}
