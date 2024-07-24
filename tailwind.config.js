/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'false',
  theme: {
    extend: {
      colors: {
        'primary': '#4C5B3F',
        'nude': '#F5EFEC'
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        tangerine: ['Tangerine', 'cursive']
      }
    },
  },
  plugins: [],
}

