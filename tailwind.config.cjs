/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gray-1': '#333',
				'gray-2': '#4F4F4F',
				'gray-3': '#828282',
				'gray-4': '#4E5150',
				'gray-5': '#BDBDBD',
				'gray-6': '#F2F2F2',
				'orange-1': '#F2994A',
			},
			fontSize: {
			'2xs': ['10px', '16px']
			}
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
	},
	plugins: [],
}
