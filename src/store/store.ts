import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore,
	persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userSlice } from './user/user.slice'

const persistConfig = {
	key: 'amazon-v2',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	// cart: createSlice.redcer,
	// carousel: carouselSlice.reducer,
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
