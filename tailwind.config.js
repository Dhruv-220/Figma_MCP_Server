/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // TODO: Extract colors, fonts, and other theme values from Figma data later
      // For example:
      // colors: {
      //   primary: '#6941C6', // Example from Figma
      //   'gray-text': '#535862', // Example from Figma
      // },
      // fontFamily: {
      //   inter: ['Inter', 'sans-serif'], // Example from Figma
      // }
    },
  },
  plugins: [],
} 