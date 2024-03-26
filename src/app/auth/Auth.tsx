'use client'
import { useAuth } from '@/hooks/useAction'
import { useActions } from '@/hooks/useActions'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from './valid-email'
import { useAuthREdirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthREdirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		type === 'login' ? login(data) : register(data)
		reset()
	}

	return (
		<section className='flex h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-white shadow-sm p-8 m-auto'
			>
				<Heading className='capitalize text-center mb-4'>{type}</Heading>

				{isLoading ? (
					<Loader />
				) : (
					<>
						<Field
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email address'
								}
							})}
							placeholder='Email'
							error={errors.email?.message}
						/>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols'
								}
							})}
							type='password'
							placeholder='Password'
							error={errors.password?.message}
						/>
						<Button type='submit' option='orange'>
							Let`s go!
						</Button>
						<div>
							<button
								type='button'
								className='inline-block opacity-50 mt-3 text-sm'
								onClick={() => setType(type === 'login' ? 'register' : 'login')}
							>
								{type === 'login' ? 'register' : 'login'}
							</button>
						</div>
					</>
				)}
			</form>
		</section>
	)
}

export default Auth
