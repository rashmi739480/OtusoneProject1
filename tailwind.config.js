/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-87':'var(--color-gray-87,#DEDEDE)',

      },
      boxShadow: {
         'dark-2xl': '0 0 50px -12px rgba(0, 0, 0, 0.7)', // Darker version of shadow-2xl
        'darker-3xl': '0 30px 60px -15px rgba(0, 0, 0, 0.7)', // Even more intense shadow
      },
    },
    screens: {
      xsm:'317px',
      xs: '425px', 
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

