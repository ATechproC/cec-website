/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark : {
          1 : "rgba(0,0,0,0.7)"
        },
        main : "#ffd60a",
        light : "#ffffff99",
        main_shadow : "0px 2px 10px rgba(255, 214, 10, 0.7)"
      },
    },
  },
  plugins: [],
}
