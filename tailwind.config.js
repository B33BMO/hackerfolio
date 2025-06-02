/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        mono: ['"Fira Mono"', 'Menlo', 'monospace'],
      },
      extend: {
        colors: {
          'glitch-cyan': '#00ffe7',
          'glitch-magenta': '#ff00ea',
          'glitch-yellow': '#ffe600',
          'glitch-bg': '#111214',
          'glitch-panel': '#18191c',
        },
        boxShadow: {
          'glitch': '0 0 12px #00ffe7, 0 0 20px #ff00ea',
        },
        animation: {
          'glitch': 'glitch 1.5s infinite linear alternate-reverse',
          'scan': 'scan 3s linear infinite',
        },
        keyframes: {
          glitch: {
            '0%': { textShadow: '2px 0 #ff00ea, -2px 0 #00ffe7' },
            '25%': { textShadow: '-2px 0 #ff00ea, 2px 0 #00ffe7' },
            '50%': { textShadow: '2px 2px #ff00ea, -2px -2px #00ffe7' },
            '75%': { textShadow: '-2px -2px #ff00ea, 2px 2px #00ffe7' },
            '100%': { textShadow: '2px 0 #ff00ea, -2px 0 #00ffe7' },
          },
          scan: {
            '0%': { opacity: '0' },
            '50%': { opacity: '1' },
            '100%': { opacity: '0' },
          }
        }
      },
    },
    plugins: [],
  }