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
				smaller: ['13px', '1.4em'],
				subtitle: ['17.5px', '1.4em'],
				title: ['1.75rem', '1.1em'],
			},
			aspectRatio: {
				poster: '2/3',
			},
			colors: {
				'netnet-grey': '#686868',
				'netnet-red': '#d22f26',
				'netnet-dark': '#1f1f1f',
			},
			spacing: {
				137: '34.25rem',
			},
			zIndex: {
				1: '1',
			},
		},
	},
	plugins: [],
};
