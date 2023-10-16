import { cartSlice } from './cart/cart.slice'
import * as userAction from './user/user.actions'

export const rootActions = {
	...userAction,
	...cartSlice.actions
}
