'use client'
import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Avatar,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
	Tooltip,
	useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'
import { MdOutlineLogin } from 'react-icons/md'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { user } = useAuth()
	const router = useRouter()
	const { logout } = useActions()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = React.useRef<HTMLButtonElement | null>(null)

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
		<>
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
						<MenuItem borderTop='ActiveBorder' onClick={onOpen}>
							Logout
						</MenuItem>
					</MenuGroup>
				</MenuList>
			</Menu>
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Log out
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure you want to log out of your account?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme='red' onClick={() => logout()} ml={3}>
								Logout
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	)
}

export default HeaderProfile
