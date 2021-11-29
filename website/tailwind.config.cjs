const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {		
		extend: {
			colors: {
				gray: colors.trueGray,
				green: colors.teal,
			},
		}
	},

	plugins: []
};

module.exports = config;
