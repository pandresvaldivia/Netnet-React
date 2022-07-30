/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Avenir Next', 'sans-serif'],
		},
		fontSize: {
			subtitle: ['17.5px', '1.4em'],
		},
		extend: {
			aspectRatio: {
				poster: '2/3',
			},
			colors: {
				'netnet-grey': '#686868',
				'netnet-red': '#d22f26',
			},
		},
	},
	plugins: [],
};
