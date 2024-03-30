/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Schibsted Grotesk", "sans-serif"],
        SpaceGrostesk: ["Space Grotesk", "sans-serif"],
        Blackbird: ["Blackbird", "sans-serif"],
        ModernSociety: ["ModernSociety", "sans-serif"],
        Geist: ["Geist", "sans-serif"],
        FixelText: ["FixelText", "sans-serif"],
        ClashDisplay: ["ClashDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
};
