/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:'#0067FF',
        yellowcolor:'#FEB60D',
        purplecolor:'#9771FF',
        irisbluecolor:'#01B5C5',
        headingcolor:'#FEB60D',
        textcolor:'#4E54F5',
      }
    },
  },
  plugins: [],
}

