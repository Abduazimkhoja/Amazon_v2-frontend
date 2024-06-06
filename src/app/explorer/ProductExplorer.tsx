'use client'
import { BiFilterAlt } from 'react-icons/bi'
import { ProductService } from '@/services/product/product.service'
import { TypePaginationProducts } from '@/types/product.interface'
import Heading from '@/ui/Heading'
import Catalog from '@/ui/catalog/Catalog'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Grid,
	GridItem,
	Input,
	useDisclosure
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useRef, useState } from 'react'
import styles from './ProductExplorer.module.scss'
import Filters from './filters/Filters'
import { Pagination } from './pagination/Pagination'
import SortDropdown from './sort/SortDropdown'
import { useFilters } from './useFilters'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}

export const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef<HTMLButtonElement>(null)

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
		<div className='container'>
			<Grid mb='8' gridTemplateColumns={'1fr auto auto'} gap='3'>
				<GridItem>
					<Heading>{isSearchTerm}</Heading>
				</GridItem>
				<GridItem>
					<Button ref={btnRef} colorScheme='orange' onClick={onOpen}>
						Filter <BiFilterAlt />
					</Button>
				</GridItem>

				<GridItem>
					<SortDropdown />
				</GridItem>
			</Grid>

			<Drawer
      size='sm'
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent
					// backdropFilter='blur(10px)'
					// backgroundColor='rgba(255,255,255, .7)'
				>
					<DrawerCloseButton />
					<DrawerHeader>Filter</DrawerHeader>

					<DrawerBody>
						<Filters />
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			<section className={cn(styles.explorer)}>
				<Catalog products={data.products} isLoading={isFetching} />
				{!isFetching && (
					<Pagination
						changePage={page => updateQueryParams('page', `${page}`)}
						currentPage={queryParams.page}
						numberPages={data.length / +queryParams.perPage}
					/>
				)}
			</section>
		</div>
	)
}
