// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Important for App Router
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If you chose to use src/ directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'sans-serif'], // Define Segoe UI as the default sans font
      },
    },
  },
  plugins: [],
};