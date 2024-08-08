/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 375px) { ... }
        xs: '375px',
        sm: '641px',
        md: '1008px',
        lg: '1280px',
        xl: '1366px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}

