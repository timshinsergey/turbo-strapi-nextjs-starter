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
			strokeWidth: {
				3: '3',
			},
			keyframes: {
				spinner: {
					'0%': { strokeDasharray: '1px, 200px', strokeDashoffset: '0' },
					'50%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-15px' },
					'100%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-125px' },
				},
			},
			animation: {
				spinner: 'spinner 1s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
