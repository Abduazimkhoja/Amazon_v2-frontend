'use client'
import { useFilters } from '@/app/explorer/useFilters'
import { useActions } from '@/hooks/useActions'
import {
	Button,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightAddon
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Search: FC = () => {
	const searchRef = useRef<HTMLInputElement | null>(null)
	const { push } = useRouter()
	const pathname = usePathname()
	const { queryParams, updateQueryParams } = useFilters()

	const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
		const value = searchRef.current?.value.trim()
		e.preventDefault()
		if (pathname !== 'explorer') return push(`/explorer?searchTerm=${value}`)
		if (value !== '') {
			updateQueryParams('searchTerm', value || '')
		}
	}

	return (
		<FormControl as='form' onSubmit={handleSubmit}>
			<InputGroup border='0' borderRadius='12' overflow='hidden' size='lg'>
				<InputLeftElement
					pointerEvents='none'
					children={<BiSearchAlt color='white' />}
				/>
				<Input
					ref={searchRef}
					defaultValue={queryParams.searchTerm}
					// onChange={e => setSearchTerm(e.target.value)}
					_hover={{}}
					borderRadius='0'
					border='0'
					bg='gray.700'
					type='text'
					textColor='white'
					placeholder='Search...'
				/>
				<InputRightAddon p='0' borderRadius='0' border='0'>
					<Button type='submit' colorScheme='orange' borderRadius='0' size='lg'>
						Search
					</Button>
				</InputRightAddon>
			</InputGroup>
		</FormControl>
	)
}

export default Search
