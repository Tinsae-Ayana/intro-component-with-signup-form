/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            proRed: "hsl(0, 100%, 74%)",
            proGreen: "hsl(154, 59%, 51%)",
            proBlue: "hsl(248, 32%, 49%)",
            darkBlue: "hsl(249, 10%, 26%)",
            grayishBlue: "hsl(246, 25%, 77%)",
         },
         backgroundImage: {
            desktop: "url('/bg-intro-desktop.png')",
            mobile: "url('/bg-intro-mobile.png')",
         },
         fontFamily: {
            poppins: ["poppins"],
         },
      },
   },
   plugins: [],
};
