import { RiDeleteRow } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { FC } from 'react'
import { IListItem } from '../admin-list.interface'
import { useRouter } from 'next/navigation'
import { RiExternalLinkLine } from 'react-icons/ri'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	viewUrl
}) => {
	const { push } = useRouter()

	return (
		<div>
			{viewUrl && (
				<button onClick={() => push(viewUrl)}>
					<RiExternalLinkLine />
				</button>
			)}
			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<RiEdit2Line />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<RiDeleteRow />
				</button>
			)}
		</div>
	)
}

export default AdminActions
