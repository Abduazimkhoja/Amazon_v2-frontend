'use client'
import { ADMIN_MENU } from '@/app/layout/sidebar/admin-menu.data'
import { Box, Flex } from '@chakra-ui/react'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const AuthNav: FC = () => {
	const pathname = usePathname()

	return (
		<section className='container'>
			<nav>
				<Flex gap={10}>
					{ADMIN_MENU.map(authNav => (
						<Box key={authNav.href}>
							<Link
								href={authNav.href}
								className={cn(
									pathname === authNav.href ? 'border-b-black' : '',
									`no-underline py-2.5 border-b-2 border-transparent hover:border-black`
								)}
							>
								{authNav.label}
							</Link>
						</Box>
					))}
				</Flex>
			</nav>
		</section>
	)
}

export default AuthNav
