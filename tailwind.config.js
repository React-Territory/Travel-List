import react from "@vitejs/plugin-react";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
};

// npm i -D tailwind postcss autoprefixer
// npx tailwind init -p (-p : postcss)
