/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor : 'hsl(278, 68%, 11%)',
        secondaryColor: {
          start: 'hsl(249, 99%, 64%)',
          end: 'hsl(278, 94%, 30%)',
        },
      }
    },
  },
  plugins: [],
}

