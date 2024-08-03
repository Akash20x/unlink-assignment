/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'newwhite': 'rgb(239, 239, 239)',
      'white': 'rgba(255, 255, 255, 1)',
      'black': 'rgb(0, 0, 0)',
      'black-op': 'rgba(0, 0, 0, 0.5)',
      'gray-white': 'rgba(255, 255, 255, 0.5)',
      'gray-svg': 'rgba(51, 51, 51, 0.5)',
       'greenish': 'rgba(29, 143, 36, 0.4)',
      'yellowish': 'rgba(255, 179, 3, 0.4)'
    },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 5px 5px 50px',
      },
      margin: {
        '8vh': '8vh',
        '14vh': '14vh'
      },
      width: {
        '320': '21.875rem'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}

