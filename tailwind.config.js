module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b5563', // New primary color (gray tone)
        accent: '#38bdf8',  // Accent color for buttons (sky blue tone)
        background: '#f3f4f6', // Background color (light gray)
      },
    },
  },
  plugins: [],
}
