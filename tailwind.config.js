/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'appGreen': {
          100: '#DAF2E4',
          300: '#32B768',
          500: '#2B7A4B'
        },
        'appBackground': '#DCDCE6',
        'textHeading': '#52665A',
        'textBodyDark': '#5C6660',
        'textBodyLight': '#AAB2AD'
      }
    },
  },
  plugins: [],
}
