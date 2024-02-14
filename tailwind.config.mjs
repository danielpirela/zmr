/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite/**/*.js'
		],
	theme: {
		extend: {
			colors: {
				'primary': '#603721',
				'secondary': '#e7d4c5'
			},
			screens: {
				'xs': '300px'
			}
		},
	},
	darkMode: 'class',
    plugins: [require('tailwindcss-animated'), require('flowbite/plugin')],
}
