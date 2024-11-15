/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {transform: "rotate(-3deg)"},
          "50%": {transform: "rotate(3deg)"}
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      fontFamily: {
        Licorice: ['Licorice', 'cursive'],
        Cedarville: ['Cedarville', 'cursive']
      }
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '960px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px'
    // }
  },
  plugins: [],
}