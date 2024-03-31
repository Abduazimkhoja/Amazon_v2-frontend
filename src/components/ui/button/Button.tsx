import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	option: 'orange' | 'white'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	option,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'btn',
				{
					'btn-orange': option === 'orange',
					'btn-white': option === 'white',
					'btn-large': size === 'lg',
					'px-5 py-2 text-sm': size === 'sm'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
