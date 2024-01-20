import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { CategoryService } from '@/services/category.service'
import Loader from '@/ui/Loader'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{ select: ({ data }) => data }
	)
	const { asPath } = useRouter()

	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside
			className='flex flex-col justify-between bg-secondary'
			style={{ height: 'calc(100vh - 91px)' }}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<h4 className='text-xl text-white mt-4 mb-6 ml-6'>Categories:</h4>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}

				{!!user && (
					<button
						className='text-white flex items-center ml-10 mb-10'
						onClick={() => logout()}
					>
						<FiLogOut />
						<span className='ml-2'>Logout</span>
					</button>
				)}
			</div>
		</aside>
	)
}

export default Sidebar
