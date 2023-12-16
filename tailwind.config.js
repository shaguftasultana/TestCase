const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".radial-gradient-bg": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            opacity: "0.3",
            borderRadius: "inherit", // maintain the border-radius of the parent
            zIndex: "-1", // ensure it's behind the content
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
