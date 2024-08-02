/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily:['Roboto','sans-serif']
    },
   
  
     
    screens: {
      sm: "480px",
      md: "897px",
      lg: "976px",
      xl: "1640px",
    },
   
  },
  plugins: [],
}