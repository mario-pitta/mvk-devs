/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#111827',
          lighter: '#1f2937',
          card: '#374151'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'gradient-flow': 'gradientFlow 3s ease infinite'
      }
    },
  },
  plugins: [],
};