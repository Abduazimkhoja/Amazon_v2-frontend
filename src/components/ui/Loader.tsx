'use client'
import type { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<svg
				className='max-w-28'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 200 200'
			>
				<radialGradient
					id='a11'
					cx='.66'
					fx='.66'
					cy='.3125'
					fy='.3125'
					gradientTransform='scale(1.5)'
				>
					<stop offset='0' stopColor='#FF7F3C'></stop>
					<stop offset='.3' stopColor='#FF7F3C' stopOpacity='.9'></stop>
					<stop offset='.6' stopColor='#FF7F3C' stopOpacity='.6'></stop>
					<stop offset='.8' stopColor='#FF7F3C' stopOpacity='.3'></stop>
					<stop offset='1' stopColor='#FF7F3C' stopOpacity='0'></stop>
				</radialGradient>
				<circle
					origin='center'
					fill='none'
					stroke='url(#a11)'
					strokeWidth='18'
					strokeLinecap='round'
					strokeDasharray='200 1000'
					strokeDashoffset='0'
					cx='100'
					cy='100'
					r='70'
				>
					<animateTransform
						type='rotate'
						attributeName='transform'
						calcMode='spline'
						dur='2'
						values='360;0'
						keyTimes='0;1'
						keySplines='0 0 1 1'
						repeatCount='indefinite'
					></animateTransform>
				</circle>
				<circle
					origin='center'
					fill='none'
					opacity='.2'
					stroke='#FF7F3C'
					strokeWidth='18'
					strokeLinecap='round'
					cx='100'
					cy='100'
					r='70'
				></circle>
			</svg>
		</div>
	)
}

export default Loader
