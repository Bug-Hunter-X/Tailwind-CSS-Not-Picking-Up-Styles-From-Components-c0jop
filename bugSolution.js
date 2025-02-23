```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... your other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'], // Added components directory
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef', // Example custom color
      }
    }
  },
  plugins: [],
};
```