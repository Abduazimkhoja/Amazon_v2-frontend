'use client'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi'

const ThemeMode: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const icon =
		colorMode === 'light' ? (
			<HiOutlineLightBulb size='30' />
		) : (
			<HiLightBulb size='30' />
		)

	return (
		<IconButton
			size='lg'
			onClick={toggleColorMode}
			icon={icon}
			aria-label='theme mode'
		/>
	)
}

export default ThemeMode
