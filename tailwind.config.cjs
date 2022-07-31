/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Avenir Next', 'sans-serif'],
		},
		extend: {
			fontSize: {
				tiny: ['0.7rem', '1.4em'],
				subtitle: ['17.5px', '1.4em'],
			},
			aspectRatio: {
				poster: '2/3',
			},
			colors: {
				'netnet-grey': '#686868',
				'netnet-red': '#d22f26',
			},
			spacing: {
				137: '34.25rem',
			},
		},
	},
	plugins: [],
};
