/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@everybody-gives/ui/**/*.{js,ts}'
	],
	theme: {
		extend: {},
		colors: {
			inherit: "inherit",
			current: "currentColor",
			transparent: "transparent",
			black: "#000",
			white: "#fff",
			red: colors.red,
			gray: colors.stone,
			primary: colors.emerald,
			background: "#EDE7E2",
			action: "#F5FF7D",
		},
		fontFamily: {
			sans: ["Arima Madurai", ...defaultTheme.fontFamily.sans],
		},
		keyframes: {
			wiggle: {
				"0%, 50%, 100%": { transform: "rotate(-3deg) scale(1.2)" },
				"25%, 75%": { transform: "rotate(3deg) scale(1.2)" },
			},
		},
		animation: {
			wiggle: "wiggle 1s ease-in-out infinite",
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
