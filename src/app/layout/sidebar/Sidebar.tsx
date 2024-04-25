'use client'
import { useCategories } from '@/hooks/queries/useCategories'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Loader from '@/ui/Loader'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()

	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside
			className='flex flex-col justify-between bg-secondary z-10'
			style={{ height: 'calc(100vh - 91px)', minHeight: `calc(100vh - 91px)` }}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<h4 className='text-xl text-white mt-4 mb-6 ml-6'>
							{isAdminPanel ? 'Menu' : 'Categories'}
						</h4>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								item => (
									<li key={item.href}>
										<Link
											className={cn(
												'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
												pathname === item.href ? 'text-primary' : 'text-white'
											)}
											href={item.href}
										>
											{item.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>
		</aside>
	)
}

export default Sidebar
