import Button from '@/ui/button/Button'
import { FC } from 'react'

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
	const paginationCount = numberPages > 1 ? numberPages : 1
	const emptyArray = Array.from({ length: paginationCount })

	return (
		<div className='text-center mt-16'>
			{emptyArray.map((_, index) => {
				const pageNumber = `${(index + 1)}`
				return (
					<Button
						key={pageNumber}
						size='sm'
						option={currentPage === pageNumber ? 'orange' : 'white'}
						onClick={() => changePage(pageNumber)}
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
