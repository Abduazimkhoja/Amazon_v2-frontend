import { useAuth } from '@/hooks/useAction'
import SquareButton from '@/ui/button/SquareButton'
import Logo from '@/ui/logo/Logo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineLogin } from 'react-icons/md'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	const router = useRouter()
	const { user } = useAuth()
	// const user = useRouter()

	return (
		<header className='bg-secondary w-full px-5 py-1 grid grid-cols-[auto,1fr,auto] items-center gap-4 '>
			<Logo />
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				{user ? (
					<HeaderProfile />
				) : (
					<SquareButton
						Icon={MdOutlineLogin}
						onClick={() => router.push('/auth')}
					/>
				)}
			</div>
		</header>
	)
}

export default Header
