/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind will scan all source files
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#6366f1",
        accent1: "#ec4899",
        accent2: "#22d3ee",
        textlight: "#e5e7eb",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
