const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["IRANYekanRegular", ...fontFamily.sans],
      },
      colors: {
        // اضافه کردن رنگ rose به تم پیش‌فرض
        primary: {
          DEFAULT: '#f43f5e', // rose-500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f9a8d4', // rose-300
          foreground: '#1f2937', // gray-800
        },
      },
    },
  },
  plugins: [],
}
