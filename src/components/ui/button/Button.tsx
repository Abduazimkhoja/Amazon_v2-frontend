import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	option: 'orange' | 'white'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	option,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium shadow px-10 py-2',
				{
					'text-white bg-primary': option === 'orange',
					'text-primary bg-white': option === 'white'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
