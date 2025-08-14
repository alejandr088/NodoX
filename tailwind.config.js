/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f9ff",
          100: "#e0f0ff",
          200: "#b8d9ff",
          300: "#90c2ff",
          400: "#5a9cff",
          500: "#aa0c0c", // rojo marca (ajustado)
          600: "#880a0a",
          700: "#660707",
          800: "#440404",
          900: "#330303",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'particles-move': 'particlesMove 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        particlesMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
