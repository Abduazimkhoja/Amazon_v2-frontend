'use client'
import { ADMIN_MENU } from '@/app/layout/sidebar/admin-menu.data'
import { Box, Flex, Link } from '@chakra-ui/react'
import cn from 'clsx'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const AuthNav: FC = () => {
	const pathname = usePathname()
	return (
		<section className='container'>
			<nav>
				<Flex gap={10}>
					{ADMIN_MENU.map(item => (
						<Box key={item.href}>
							<Link
								href={item.href}
								textDecoration='none'
								_hover={{ borderBottom: '2px solid #000' }}
								borderBottom={pathname === item.href ? '2px solid #000' : ''}
								paddingBlock='1'
							>
								{item.label}
							</Link>
						</Box>
					))}
				</Flex>
			</nav>
		</section>
	)
}

export default AuthNav
