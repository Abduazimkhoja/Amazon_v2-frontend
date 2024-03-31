'use client'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(`/q?term=${encodeURIComponent(searchTerm)}`)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div
				className='border border-solid border-gray/10 grid 1/2 rounded-xl overflow-hidden'
				style={{ gridTemplateColumns: '1fr 0.1fr' }}
			>
				<input
					type='search'
					className='bg-[#22303e] text-sm py-2 px-4 text-white'
          value={searchTerm}
          onChange={e=> setSearchTerm(e.target.value)}
          placeholder='Search...'
				/>
        <button type='submit' className='bg-primary text-white flex items-center justify-center p-2.5'><BsSearch/></button>
			</div>
		</form>
	)
}

export default Search
