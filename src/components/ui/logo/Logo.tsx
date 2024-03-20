import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ILogo {
	url?: string
	width?: number
	height?: number
}

const Logo: FC<ILogo> = ({ url, width = 180, height = 60 }) => {
	return (
		<Link href='/'>
			<Image
				className='object-contain w-120 h-auto'
				priority
				width={width}
				height={height}
				src={url ? url : '/images/logo.svg'}
				alt='Amazon v2'
			/>
		</Link>
	)
}

export default Logo
