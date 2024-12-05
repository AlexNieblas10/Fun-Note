/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadowKey: '0 5px 1px rgba(32, 32, 32, .2)',
      },
    },
  },
  plugins: [],
}
