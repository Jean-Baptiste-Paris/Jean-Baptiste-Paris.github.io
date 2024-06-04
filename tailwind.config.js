/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui'],
      display: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear forwards',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}
