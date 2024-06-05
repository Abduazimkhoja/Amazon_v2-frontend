import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthNav from './navigation'

export default function AuthLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<Flex gap={10} flexDirection='column'>
			<AuthNav />
			<section className='container'>{children}</section>
		</Flex>
	)
}
