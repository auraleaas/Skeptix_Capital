/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This will make 'Poppins' the default font for the `font-sans` utility.
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

