/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        almostWhite: 'hsl(0, 0%, 98%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        almostBlack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],  // Add the imported font here
      },
    },
  },
  plugins: [],
}