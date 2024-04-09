'use client'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useState } from 'react'
import styles from './ProductExplorer.module.scss'
import { Pagination } from './pagination/Pagination'
import SortDropdown from './sort/SortDropdown'
import { useFilters } from './useFilters'
import Filters from './filters/Filters'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

export const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['product explorer', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		initialData: initialProducts,
		enabled: isFilterUpdated
	})

	const isSearchTerm = queryParams.searchTerm
		? `Search by query "${queryParams.searchTerm}"`
		: 'Explorer'

	return (
		<>
			<div className='flex item-center justify-between mb-7'>
				<Heading>{isSearchTerm}</Heading>
				<SortDropdown />
			</div>
			<Button
				option='white'
				onClick={() => setIsFilterOpen(!isFilterOpen)}
				className='mb-7'
			>
				{isFilterOpen ? 'Close' : 'Open'} filters
			</Button>
			<div
				className={cn(styles.explorer, {
					[styles.filterOpened]: isFilterOpen
				})}
			>
				<aside>
					<Filters />
				</aside>

				<section>
					<Catalog products={data.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', `${page}`)}
						currentPage={queryParams.page}
						numberPages={data.length / +queryParams.perPage}
					/>
				</section>
			</div>
		</>
	)
}
