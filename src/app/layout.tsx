import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import type { Metadata, Viewport } from 'next'
import { Golos_Text } from 'next/font/google'
import Header from './layout/header/Header'

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export const viewport: Viewport = {
	themeColor: 'black',
	width: '1600px',
  userScalable: false,
	initialScale: 0
}

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s & ${SITE_NAME}`
	},
	description: 'Pet project amazon clone',
	authors: [
		{
			name: 'Abduazimkhoja',
			url: 'https://github.com/Abduazimkhoja/Amazon-frontend'
		}
	],
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@amazon.com']
	},
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={golos.className}>
			<body className='bg-bg-color'>
				<Providers>
					<Header />
					<main className='pt-8 pb-52'>{children}</main>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
