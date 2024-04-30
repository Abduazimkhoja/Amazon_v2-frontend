'use client'
import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import SquareButton from '@/ui/button/SquareButton'
import {
	Avatar,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { MdOutlineLogin } from 'react-icons/md'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
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
		<Menu>
			<MenuButton>
				{profile?.avatarPath && (
					<Avatar size='md' name='Ryan Florence' src={profile.avatarPath} />
				)}
			</MenuButton>
			<MenuList zIndex={2}>
				<MenuGroup title='Profile'>
					<MenuItem>My Account</MenuItem>
					<MenuItem>
						<Link href='/my-orders'>Payments</Link>
					</MenuItem>
          <MenuDivider/>
					<MenuItem borderTop='ActiveBorder' onClick={() => logout()}>Logout</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	)
}

export default HeaderProfile
