import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderCart from '../cart/HeaderCart'
import HeaderProfile from './HeaderProfile'
import Search from './Search'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full p-6 grid'
			style={{ gridTemplateRows: '1fe 3fr 1.2fr' }}
		>
			<Link href='/'>
				<Image
					priority
					width={180}
					height={37}
					src='/images/logo.s
               vg'
					alt='Amazon v2'
				/>
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
