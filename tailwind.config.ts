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

        primary: {
          main: '#2E8DFF',
          surface: '#F5F5FF',
          border: '#DFE0F3',
          hover: '#1463FF',
          pressed: '#085885',
          focus: '#4C4DDC33',
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
          focus: '#50CD8933',
        },
        error: {
          main: '#F14141',
          surface: '#FFF2F2',
          border: '#FAC0C0',
          hover: '#D93A3A',
          pressed: '#802A2A',
          focus: '#F1414133',
        },
        info: {
          main: '#7239EA',
          surface: '#F6F2FF',
          border: '#D0BDF8',
          hover: '#6633D1',
          pressed: '#3F2478',
          focus: '#7239EA33',
        },
        neutral: {
          10: '#FFFFFF',
          20: '#F5F5F5',
          30: '#EDEDED',
          40: '#CED1D8',
          50: '#AFB3BB',
          60: '#7E8492',
          70: '#606060',
          80: '#35373D',
          90: '#161A34',
          100: '#1D1E25',
        },
      },
      fontSize: {
        h1: ['80px', '96px'],
        h2: ['48px', '56px'],
        h3: ['40px', '48px'],
        h4: ['32px', '42px'],
        h5: ['24px', '32px'],
        h6: ['20px', '26px'],
        large: ['16px', '24px'],
        medium: ['14px', '20px'],
        small: ['12px', '16px'],
      },
      keyframes: {
        slideInMenu: {
          '0%': { transform: 'translateX(100%)', right: '-400px' },
          '50%': { trasform: 'translateX(0)', right: '-50px' },
          '100%': { transform: 'translateX(-50%)', right: '0' },
        },
        slideOutMenu: {
          '0%': { transform: 'translateX(-50%)', right: '0' },
          '50%': { trasform: 'translateX(0)', right: '-50px' },
          '100%': { transform: 'translateX(100%)', right: '-400px' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-150%)', opacity: '0' },
          '25%': { transform: 'translateX(-100%)', opacity: '0.25' },
          '50%': { transform: 'translateX(-50%)', opacity: '0.5'},
          '75%': { transform: 'translateX(-25%)', opacity: '0.75'},
          '100%': { transform: 'translateX(0)', opacity: '1'},
        },
        slideLeft: {
          '0%': { transform: 'translateX(150%)', opacity: '0' },
          '25%': { transform: 'translateX(100%)', opacity: '0.25' },
          '50%': { transform: 'translateX(50%)', opacity: '0.5'},
          '75%': { transform: 'translateX(25%)', opacity: '0.75'},
          '100%': { transform: 'translateX(0)', opacity: '1'},
        },
        slideUp: {
          '0%': { transform: 'translateY(150%)', opacity: '0' },
          '25%': { transform: 'translateY(100%)', opacity: '0.25' },
          '50%': { transform: 'translateY(50%)', opacity: '0.5'},
          '75%': { transform: 'translateY(25%)', opacity: '0.75'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        },
        slideDown: {
          '0%': { transform: 'translateY(-150%)', opacity: '0' },
          '25%': { transform: 'translateY(-100%)', opacity: '0.25' },
          '50%': { transform: 'translateY(-50%)', opacity: '0.5'},
          '75%': { transform: 'translateY(-25%)', opacity: '0.75'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        },
      },
      animation: {
        'slide-in-menu': 'slideInMenu 0.3s linear',
        'slide-out-menu': 'slideOutMenu 0.3s linear',
        'slide-right': 'slideRight 0.5s linear',
        'slide-left': 'slideLeft 0.5s linear',
        'slide-up': 'slideUp 0.5s linear',
        'slide-down': 'slideDown 0.5s linear',
      }
    },
  },
  plugins: [],
} satisfies Config;
