/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      'manrope':['Manrope', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0A2640',
        secondary: '#69E6A6',
        primaryGray: '#777777'
      },
      dropShadow: {
        boldoSm :'0px 4px 32px rgba(0, 0, 0, 0.08)'
      }
    },
  },
   plugins: [require("daisyui")],
}
