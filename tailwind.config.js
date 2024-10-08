/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A1C14B",
        "secondary-orange": "#E0912F",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
