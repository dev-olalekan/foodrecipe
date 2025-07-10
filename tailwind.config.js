// tailwind.config.js
/* export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
};
 */

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        farro: ["Farro"],
      },
    },
  },
  plugins: [],
};
