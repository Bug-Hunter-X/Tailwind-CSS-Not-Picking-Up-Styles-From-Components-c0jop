```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... your other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Make sure this line includes all your template files
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