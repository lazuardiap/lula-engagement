/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'false',
  theme: {
    extend: {
      colors: {
        'primary': '#4C5B3F',
        'nude': '#F5EFEC',
        'semi-nude': '#E7B99A'
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        tangerine: ['Tangerine', 'cursive'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'paper-pattern': "url('../public/assets/white-paper-texture.png')",
      }
    },
  },
  plugins: [],
}

