/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a0a",
        "dark-card": "#1a1a1a",
        "red-accent": "#dc2626",
        "red-hover": "#b91c1c",
      },
      fontFamily: {
        horror: ["Creepster", "cursive"],
      },
    },
  },
  plugins: [],
};
