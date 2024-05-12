import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s & ${SITE_NAME}`
	},
	description: 'Pet project amazon',
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
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={golos.className}>
			<body>
				<Providers>
					<div className='bg-secondary '>
						<Header />
						<div className='grid' style={{ gridTemplateColumns: '1fr 6fr' }}>
							<Sidebar />
							<main className='p-12 pb-52 bg-bg-color rounded-tl-lg'>
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
