/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Add this line
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
