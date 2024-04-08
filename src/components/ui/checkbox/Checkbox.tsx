import type { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import styles from './Checkbox.module.scss'

export interface ICheckbox {
	isChecked: boolean
	onClick: () => void
	className: string
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
	isChecked,
	onClick,
	className,
	children
}) => {
	return (
		<button className={cn(styles.checkbox, className)}>
			<span className={cn({ [styles.active]: isChecked })}></span>
			<span>{children}</span>
		</button>
	)
}

export default Checkbox
