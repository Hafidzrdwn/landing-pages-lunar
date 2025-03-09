 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
    extend: {
      colors: {
        blue: {
          50: "#e6f0ff",  // Sangat terang
          100: "#bfd8ff",
          200: "#99c0ff",
          300: "#73a8ff",
          400: "#4d90ff",
          500: "#004aad", // Base color
          600: "#003e91",
          700: "#003275",
          800: "#002659",
          900: "#001b3d",  // Sangat gelap
        },
      },
    },
  },
   plugins: [],
}
