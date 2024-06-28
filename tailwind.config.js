module.exports = {
	content: [
		"./templates/*.{html,hbs}",
		"./templates/**/*.hbs",
		"./assets/**/*.css",
	],
	theme: {
		extend: {
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
