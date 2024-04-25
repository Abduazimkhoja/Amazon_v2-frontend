/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		remotePatterns: [
			{ protocol: 'http', hostname: 'localhost', pathname: '**' },
			{ protocol: 'https', hostname: 'ae01.alicdn.com', pathname: '**' },
			{ protocol: 'https', hostname: 'picsum.photos', pathname: '**' },
			{ protocol: 'https', hostname: 'loremflickr.com', pathname: '**' },
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				pathname: '**'
			},
			{ protocol: 'https', hostname: 'cloudflare-ipfs.com', pathname: '**' }
		]
	},
	async rewrites() {
		return [
			{
				source: `/uploads/:path*`,
				destination: `${SERVER_URL}/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
