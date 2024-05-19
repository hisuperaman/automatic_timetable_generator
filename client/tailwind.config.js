/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0F172A",
          secondary: "#1E293B",
          hover1: "#0f1931",
          hover2: "#756bff",
        },
        light: {
          primary: "white",
          secondary: "#2146ff",
          hover1: "#9fa7b9",
          hover2: "#756bff",
        }
      }
    },
  },
  plugins: [],
}