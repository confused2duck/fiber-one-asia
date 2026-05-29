/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#5ec2a9',
            dark: '#4a9e89',
            light: '#7ad1bb',
          },
          accent: {
            DEFAULT: '#89663f',
            dark: '#6b4f32',
            light: '#a67d52',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }