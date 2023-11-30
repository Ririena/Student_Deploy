/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vueform.config.ts",
    "./plugins/vueform.config.ts", // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
    extend: {
      margin: {
        92: "340px",
      },
      width: {
        128: "32rem",
        138: "38rem",
      },
      screens: {
        xs: "360px", // Adjust the breakpoint as needed
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  plugins: [require("daisyui"), 
  require('@vueform/vueform/tailwind'),],

  daisyui: {
    themes: ['cupcake']
  },
};
