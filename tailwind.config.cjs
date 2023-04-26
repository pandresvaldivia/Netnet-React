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
				'headline-1': ['1.625rem', '1.3em'],
				'regular-1': ['0.875rem', '1.7em'],
			},
			aspectRatio: {
				poster: '2/3',
			},
			colors: {
				'netnet-grey': '#686868',
				'netnet-grey-100': '#333333',
				'netnet-grey-200': '#8c8c8c',
				'netnet-grey-300': '#2B2B2B',
				'netnet-grey-400': '#4D4D4D',
				'netnet-red': '#d22f26',
				'netnet-red-100': '#e50914',
				'netnet-dark': '#1f1f1f',
				'netnet-orange': '#e87c03',
				'netnet-green': '#71D074',
				'netnet-skeleton-100': '#111827',
				'netnet-skeleton-200': '#0c121d',
			},
			spacing: {
				137: '34.25rem',
			},
			zIndex: {
				1: '1',
			},
			transitionDelay: {
				400: '400ms',
			},
		},
	},
	plugins: [],
};
