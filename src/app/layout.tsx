'use client'
import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

// export const metadata: Metadata = {
// 	icons: {
// 		icon: '/favicon.svg'
// 	},
// 	title: {
// 		absolute: SITE_NAME,
// 		template: `%s & ${SITE_NAME}`
// 	},
// 	metadataBase: new URL(getSiteUrl()),
// 	openGraph: {
// 		type: 'website',
// 		siteName: SITE_NAME,
// 		emails: ['info@amazon.com']
// 	}
// }

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<div>
						<Header />
						<div className='grid' style={{ gridTemplateColumns: '1fr 4fr' }}>
							<Sidebar />
							<main className='p-12'>{children}</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
