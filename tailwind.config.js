/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      playfair: ["Playfair Display", "sans-serif"],
    },
  },
  plugins: [],
};
