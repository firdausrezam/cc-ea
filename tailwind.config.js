module.exports = {
	content: [
		"./templates/*.{html,hbs}",
		"./templates/**/*.hbs",
		"./assets/**/*.css",
	],
	theme: {
		extend: {
			colors: {
				"fc-dark-green": "#04953F",
				"fc-green": "#07F468",
				"fc-dark": "#1A1C19",
			},
			animation: {
				marquee: "marquee 30s linear infinite",
				marquee2: "marquee2 30s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({ strategy: "class" }),
		require("daisyui"),
	],
};
