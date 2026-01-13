import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8E1D8',
        secondary: '#4A5941',
        accent: '#DEB373',
        primary: {
          DEFAULT: '#4A5941',
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d3dccb',
          300: '#b4c4a7',
          400: '#94a77f',
          500: '#4A5941',
          600: '#3d4a35',
          700: '#323c2c',
          800: '#2a3225',
          900: '#232a20',
        },
      },
      animation: {
        'scroll-right': 'scroll-right 50s linear infinite',
        'scroll-left': 'scroll-left 50s linear infinite',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


