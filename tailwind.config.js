/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'san-sarif']
      },
      colors: {
        "inputcolor": "#0b1c24",
        "boxcolor": "#1F3540"
      }
    },
  },
  plugins: [],
}

