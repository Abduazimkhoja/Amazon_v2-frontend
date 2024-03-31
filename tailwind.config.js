/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	gray: '#cdcdcd',
	black: '#2e3239',
	white: twColors.white,
	secondary: '#161D25',
	primary: '#FF9902',
	'bg-color': '#F2F2F6',
	aqua: '#268697',
	red: twColors.red[400]
}

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			zIndex: {
				1: 1,
				2: 2,
				3: 3
			},
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2x1': '1.725rem',
				'3x1': '2.155rem',
				'4x1': '2.58rem',
				'5x1': '3.45rem',
				'6x1': '4.3rem',
				'7x1': '5.17rem',
				'8x1': '6.9rem',
				'9x1': '9.2rem'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.4
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35 ease-in-out'
			}
		}
	},
	plugins: []
}
