import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import type { Metadata, Viewport } from 'next'
import { Golos_Text } from 'next/font/google'
import Header from './layout/header/Header'
import { Grid } from '@chakra-ui/react'

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
	icons: {
		apple: '/apple-touch-icon.png',
		icon: [
			{
				url: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png'
			},
			{
				url: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png'
			}
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#5bbad5'
			}
		]
	},
	manifest: '/site.webmanifest',

	themeColor: '#ffffff',
	other: {
		'msapplication-TileColor': '#00aba9',
		'msapplication-TileImage': '/mstile-144x144.png'
	}
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
					<Grid templateRows='auto 1fr auto' className='min-h-dvh'>
						<Header />
						<main className='pt-8'>{children}</main>
						<footer className='pb-52'></footer>
					</Grid>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
