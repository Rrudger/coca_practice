import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          main: '#4C4DDC',
          surface: '#F5F5FF',
          border: '#DFE0F3',
          hover: '#3334CC',
          pressed: '#085885',
          focus: '#DBDBF8',
        },
        secondary: {
          main: '#FFD33C',
          surface: '#FFF6D8',
          border: '#FFF0BE',
          hover: '#D5B032',
          pressed: '#806A1E',
          focus: '#FFF6D8',
        },
        success: {
          main: '#50CD89',
          surface: '#F2FFF8',
          border: '#C5EED8',
          hover: '#46B277',
          pressed: '#28593F',
          focus: '#DCF5E7',
        },
        error: {
          main: '#F14141',
          surface: '#FFF2F2',
          border: '#FAC0C0',
          hover: '#D93A3A',
          pressed: '#802A2A',
          focus: '#FCD9D9',
        },
        info: {
          main: '#7239EA',
          surface: '#F6F2FF',
          border: '#D0BDF8',
          hover: '#6633D1',
          pressed: '#3F2478',
          focus: '#E3D7FB',
        },
        neutral: {
          10: '#FFFFFF',
          20: '#F5F5F5',
          30: '#EDEDED',
          40: '#D6D6D6',
          50: '#C2C2C2',
          60: '#878787',
          70: '#606060',
          80: '#383838',
          90: '#403A3A',
          100: '#101010',
        },
      },
      fontSize: {
        h1: ['64px', '72px'],
        h2: ['48px', '56px'],
        h3: ['40px', '48px'],
        h4: ['32px', '40px'],
        h5: ['24px', '32px'],
        h6: ['18px', '26px'],
        large: ['16px', '24px'],
        medium: ['14px', '20px'],
        small: ['12px', '16px'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.2s linear',
        'slide-out': 'slideIn 0.2s reverse linear',
      }
    },
  },
  plugins: [],
} satisfies Config;
