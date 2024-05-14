'use client'
import { useAuth } from '@/hooks/useAction'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Link from 'next/link'
import type { FC } from 'react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const AdminLink: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	const isAdminAndNotAdminPanel = user?.isAdmin && !isAdminPanel

	return (
		isAdminAndNotAdminPanel && (
			<Link
				href='/admin'
				className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
			>
				<MdOutlineAdminPanelSettings size={29} />
			</Link>
		)
	)
}

export default AdminLink
