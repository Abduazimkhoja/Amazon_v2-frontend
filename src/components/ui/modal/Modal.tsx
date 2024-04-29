'use client'
import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'

interface IModal {
	isOpen: boolean
	closeModal: () => void
}

const Modal: FC<PropsWithChildren<IModal>> = ({
	children,
	closeModal,
	isOpen
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	if (!isOpen || !modalRef.current) {
		return null
	}

	return createPortal(
		<div className={styles.overlay}>
			<div className={styles.window}>
				<button onClick={closeModal}>
					<RiCloseFill />
				</button>
				{children}
			</div>
		</div>,
		modalRef.current
	)
}

export default Modal
