module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "14px",
        {
          letterSpacing: "-.01em",
        },
      ],
      sm: [
        "16px",
        {
          letterSpacing: ".24em",
        },
      ],
      md: [
        "20px",
        {
          letterSpacing: ".32em",
        },
      ],
      lg: [
        "35px",
        {
          lineHeight: "1.1em",
          letterSpacing: ".22em",
        },
      ],
      custom: ["15px", { lineHeight: "1.6em", letterSpacing: ".38em" }],
    },
    screens: {
      md: "768px",
      lg: "1280px",
      xl: "1520px",
    },
    extend: {
      colors: {
        grey: "#3e4443",
        textgrey: "#47555c",
        overlaygrey: "#607988",
        lightgrey: "#eaebea",
        bluegrey: "#5b7381",
        orange: "#c75d49",
      },
      fontFamily: {
        noto: "'Noto Sans JP', sans-serif",
      },
    },
  },
  plugins: [],
};
