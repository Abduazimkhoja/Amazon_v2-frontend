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
				'rounded-xl font-medium shadow px-10 py-2 hover:opacity-90',
				{
					'text-white bg-primary': option === 'orange',
					'text-primary bg-white': option === 'white',
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
