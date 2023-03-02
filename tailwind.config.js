module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "Inter-regular"],
    },
    screens: {
      xsm: "350px",
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1920px",
    },
    container: {
      screens: {
        xsm: "350px",
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
      center: true,
    },
  },
  plugins: [],
};
