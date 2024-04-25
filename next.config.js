/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		SERVER_URL_API: process.env.SERVER_URL_API,
		SERVER_URL_HOST: process.env.SERVER_URL_HOST,
		APP_URL: process.env.APP_URL,
	},
	images: {
		remotePatterns: [
			{ protocol: 'http', hostname: 'localhost', pathname: '**' },
			{ protocol: 'https', hostname: 'ae01.alicdn.com', pathname: '**' },
			{ protocol: 'https', hostname: 'picsum.photos', pathname: '**' },
			{ protocol: 'https', hostname: 'loremflickr.com', pathname: '**' },
			{
				protocol: 'https',
				hostname: process.env.SERVER_URL_HOST,
				pathname: '**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				pathname: '**'
			},
			{ protocol: 'https', hostname: 'cloudflare-ipfs.com', pathname: '**' }
		]
	}
}

module.exports = nextConfig
