/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'green-1':'#C0C78C',
        'green-2':'#9cb159',
        'green-3':'#dfeebf',
      },
      boxShadow: {
        "box": "0 20px 50px rgba(46, 46, 46, 0.1)",
        "category": "0 4px 8px rgba(55, 62, 68, 0.25)"
      },
    },
  },
  plugins: [],
}