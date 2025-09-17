/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blur': '0 0 15px 5px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
