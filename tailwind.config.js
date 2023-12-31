/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "300px", max: "767px" },
      tablet: { min: "768px", max: "1024px" },
      desktop: { min: "1024px" },
    },
    extend: {
      boxShadow: {
        cards:
          "4px 4px 10px -1px rgb(0 0 0 / 0.1), -1px -1px 6px -1px rgb(0 0 0 / 0.1)",
      },
      colors: {
        text: "#0A2647",
        primary: "#205295",
        secc: "#144272",
        bg: "#2C74B3",
      },
      gridTemplateColumns: {
        desktop: "repeat(2, minmax(0, 250px))",
      },
      backgroundImage: {
        "product-bg": "url('/wa.jpg')",
      },
    },
  },
  plugins: [],
};
