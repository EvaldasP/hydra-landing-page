/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-linear":
          "linear-gradient(to right, #8176AF 0%, #9E94C9 46%, #C0B7E8 100%)",
        "custom-radial": "radial-gradient(circle, #3A3456, #211E2E)",
      },
    },
  },
  plugins: [],
};
