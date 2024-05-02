'use client'

import Button from '@/ui/button/Button'
import { arrayGenerator } from '@/utils/array-generator'
import type { FC } from 'react'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number | string
}

export const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage
}) => {
	if (numberPages < 2) return null
	const emptyArray = arrayGenerator(numberPages)
	currentPage = Number(currentPage)

	const activeButton = (pageNumber: number) => {
		if (currentPage === pageNumber) return 'orange'
		return 'white'
	}

	return (
		<div className='text-center mt-16'>
			{emptyArray.map((_, index) => {
				const pageNumber = index + 1
				return (
					<Button
						key={pageNumber}
						size='sm'
						option={activeButton(pageNumber)}
						onClick={() => changePage(String(pageNumber))}
						className='mx-3'
						disabled={currentPage === pageNumber}
					>
						{pageNumber}
					</Button>
				)
			})}
		</div>
	)
}
