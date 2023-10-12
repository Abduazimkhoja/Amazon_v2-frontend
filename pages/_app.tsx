import '@/assets/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '../src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-page.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
