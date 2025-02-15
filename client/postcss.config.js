export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js', // Ensure this matches your Tailwind config file
    },
    autoprefixer: {},
  },
};