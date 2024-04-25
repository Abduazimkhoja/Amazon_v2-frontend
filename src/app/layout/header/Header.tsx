import Logo from '@/ui/logo/Logo'
import Link from 'next/link'
import type { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import AdminLink from './AdminLink'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	return (
		<header className='bg-secondary w-full px-5 py-1 grid grid-cols-[auto,1fr,auto] items-center gap-4 '>
			<Logo />
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<AdminLink />
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
