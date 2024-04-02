'use client'
import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import SquareButton from '@/ui/button/SquareButton'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { MdOutlineLogin } from 'react-icons/md'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, ref, setIsShow } = useOutside(false)
	const { user } = useAuth()
	const router = useRouter()
	const { logout } = useActions()

	if (!user) {
		return (
			<SquareButton
				Icon={MdOutlineLogin}
				onClick={() => router.push('/auth')}
			/>
		)
	}

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{profile?.avatarPath && (
					<Image
						width={43}
						height={43}
						src={profile.avatarPath}
						alt='profile'
						className='rounded-full border-primary border border-solid animate-opacity'
					/>
				)}
			</button>
			{/* modal */}
			{isShow && (
				<div
					className='flex flex-col gap-2 absolute w-40 right-2 z-20 bg-white shadow py-2 px-4 rounded-md'
					style={{ top: 'calc(100%+1rem)' }}
				>
					<Link
						href='/my-orders'
						className='hover:text-primary duration-300 transition-colors'
					>
						My orders
					</Link>
					<button
						className=' flex items-center hover:text-primary duration-300 transition-colors'
						onClick={() => logout()}
					>
						<FiLogOut />
						<span className='ml-2'>Logout</span>
					</button>
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
