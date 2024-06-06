'use client'
import Logo from '@/ui/logo/Logo'
import { Center, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import AdminLink from './AdminLink'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	const pathname = usePathname()
	if (pathname === '/auth') return null

	return (
		<div className=' bg-secondary w-full'>
			<header className='container px-5 py-1 grid grid-cols-[auto,1fr,auto] items-center gap-4 '>
				<Logo />
				<Search />
				<Center gap='10'>
					<AdminLink />
					<Tooltip label='Favorites'>
						<Link
							href='/favorites'
							className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
						>
							<AiOutlineHeart size='29' />
						</Link>
					</Tooltip>
					<HeaderCart />
					{/* <ThemeMode /> */}
					<HeaderProfile />
				</Center>
			</header>
		</div>
	)
}

export default Header
