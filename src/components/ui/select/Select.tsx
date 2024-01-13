import { FC } from 'react'
import styles from './select.module.scss'

const Select: FC = () => {
	return (
		<div className='relative'>
			<button className='flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none'>
				<span className='text-sm leading-none'>Dropdown</span>
				<svg
					className='w-4 h-4 mt-px ml-2'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fill-rule='evenodd'
						d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
						clip-rule='evenodd'
					/>
				</svg>
			</button>
			<div className='absolute flex flex-col w-40 mt-1 z-20 bg-white border border-black shadow-lg'>
				<div className={styles.option}>
					<p>Item 1</p>
				</div>
			</div>
		</div>
	)
}

export default Select
