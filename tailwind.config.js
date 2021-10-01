module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layout/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
