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
      },keyframes: {
        'zoom-in': {
          '0%': {
            transform: 'scale(.7)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'zoom-in': 'zoom-in .3s ease-in-out',
        'zoom-out': 'zoom-in .3s ease-in-out reverse',
        'fade-up': 'fade-up .5s ease-in-out',
        'fade-in': 'fade-in .5s ease-in-out',
      }
    },
  },
   plugins: [require("daisyui")],
}
