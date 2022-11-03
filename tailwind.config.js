/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        'sans': "'Montserrat', serif",
        'serif': "'Ogg', sans-serif",
        'noto': "'Noto Sans'",
      },
      colors:{
        'dark-gray': 'hsl(0, 0%, 13%)',
        'light-gray':'#ccc',
        'soft-pink':'hsl(0, 80%, 86%)',
        'salmon':'hsl(0, 74%, 74%)',
        'creme':'hsl(0, 100%, 98%)',
        'dark-red':'hsl(0, 6%, 24%)',
      },
      spacing: {
        '9px': '9px',
        '22': '5.5rem',
      },
      rotate: {
        '20': '20deg',
        '30': '30deg',
        '35': '35deg',
      },
      maxHeight: {
        '50': '50vh',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },
  plugins: [],
}
