const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				// all screens must be recorded
				// for paddings to work
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px',
					'3xl': '1920px',
				},
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '3rem',
					xl: '4rem',
				},
			},
			colors: {
				primary: {
					DEFAULT: colors.indigo['600'],
				},
				secondary: {
					DEFAULT: colors.indigo['100'],
				},
				error: {
					DEFAULT: colors.red['700'],
				},
				success: {
					DEFAULT: colors.green['700'],
				},
			},
			strokeWidth: {
				3: '3',
			},
			keyframes: {
				enter: {
					'0%': { transform: 'scale(0.9)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 },
				},
				leave: {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(0.9)', opacity: 0 },
				},
				spinner: {
					'0%': { strokeDasharray: '1px, 200px', strokeDashoffset: '0' },
					'50%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-15px' },
					'100%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-125px' },
				},
			},
			animation: {
				enter: 'enter 200ms ease-out',
				leave: 'leave 150ms ease-in forwards',
				spinner: 'spinner 1s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
