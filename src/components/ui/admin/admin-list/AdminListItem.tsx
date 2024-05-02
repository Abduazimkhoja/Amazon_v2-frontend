import { Skeleton, Td, Tr } from '@chakra-ui/react'
import type { FC } from 'react'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

const AdminListItem: FC<IAdminListItem> = ({
	removeHandler,
	listItem
}) => {
	return (
		<Tr>
			{listItem.items.map(value => (
				<Td key={value}>{value}</Td>
			))}
			<Td display='flex' justifyContent='flex-end'>
				<AdminActions
					viewUrl={listItem.viewUrl}
					editUrl={listItem.editUrl}
					removeHandler={removeHandler}
				/>
			</Td>
		</Tr>
	)
}

export default AdminListItem
