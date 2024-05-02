'use client'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Flex,
	IconButton,
	Tooltip,
	useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'
import {
	RiDeleteBin6Line,
	RiEdit2Line,
	RiExternalLinkLine
} from 'react-icons/ri'
import { IListItem } from '../admin-list.interface'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	viewUrl
}) => {
	const { push } = useRouter()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = React.useRef<HTMLButtonElement | null>(null)

	return (
		<Flex gap='3'>
			{viewUrl && (
				<Tooltip label='View'>
					<IconButton
						colorScheme='blue'
						onClick={() => push(viewUrl)}
						icon={<RiExternalLinkLine size='20' />}
						aria-label='view'
					/>
				</Tooltip>
			)}
			{editUrl && (
				<Tooltip label='Edit'>
					<IconButton
						colorScheme='green'
						onClick={() => push(editUrl)}
						icon={<RiEdit2Line size='20' />}
						aria-label='edit'
					/>
				</Tooltip>
			)}
			{removeHandler && (
				<Tooltip label='Delete'>
					<IconButton
						colorScheme='red'
						onClick={onOpen}
						icon={<RiDeleteBin6Line size='20' />}
						aria-label='delete'
					/>
				</Tooltip>
			)}
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme='red' onClick={removeHandler} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</Flex>
	)
}

export default AdminActions
