'use client'
import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import {
	Avatar,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Tooltip
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
			<Tooltip label='sing in'>
				<IconButton
					size='lg'
					colorScheme='orange'
					aria-label='sing in'
					icon={<MdOutlineLogin size='22' />}
					onClick={() => router.push('/auth')}
				/>
			</Tooltip>
		)
	}

	return (
		<Menu>
			<MenuButton>
				{profile?.avatarPath && (
					<Avatar
						border='2px solid orange'
						size='md'
						name='Ryan Florence'
						src={profile.avatarPath}
					/>
				)}
			</MenuButton>
			<MenuList zIndex='20'>
				<MenuGroup title='Profile'>
					<MenuItem>My Account</MenuItem>
					<MenuItem>
						<Link href='/my-orders'>Payments</Link>
					</MenuItem>
					<MenuDivider />
					<MenuItem borderTop='ActiveBorder' onClick={() => logout()}>
						Logout
					</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	)
}

export default HeaderProfile
