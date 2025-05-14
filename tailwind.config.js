/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["/.src/**/*.{js,ts,jsx,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}', // or whatever folders/extensions you're using
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
