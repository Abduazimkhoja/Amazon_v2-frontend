'use client'
import Loader from '@/ui/Loader'
import { Box, Table, TableContainer, Tbody } from '@chakra-ui/react'
import type { FC } from 'react'
import AdminListItem from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean
	removeHandler?: (id: number) => void
}

const AdminList: FC<IAdminList> = ({
	isLoading,
	removeHandler,
	listItems = []
}) => {
	return (
		<TableContainer>
			<Table variant='simple'>
				{/* <Thead>
					<Tr>
						<Th>To convert</Th>
						<Th>into</Th>
						<Th isNumeric>multiply by</Th>
					</Tr>
				</Thead> */}
				<Tbody>
					{isLoading ? (
						<Loader />
					) : listItems.length ? (
						listItems.map(listItem => (
							<AdminListItem
								key={listItem.id}
								removeHandler={
									removeHandler ? () => removeHandler(listItem.id) : undefined
								}
								listItem={listItem}
							/>
						))
					) : (
						<Box children='Elements not found' />
					)}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default AdminList
