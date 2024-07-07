// tailwind.config.js

module.exports = {
  content: [
    './docs/index.html',       // Path to HTML files
    './docs/style.css',        // Path to CSS files
    './docs/scripts/script.js', // Path to JavaScript files
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3490dc',   // Example custom color
        'custom-green': '#38c172',  // Example custom color
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],  // Example custom fonts
      },
      spacing: {
        '128': '32rem',  // Example custom spacing
      },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
    // Example: require('@tailwindcss/typography'),
  ],
}