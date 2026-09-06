/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1E3A',
        navy2: '#122A4D',
        line: '#22345A',
        gold: '#D9A441',
        sky: '#1E88A8',
        success: 'rgb(15 165 64)',
        paper: '#F6F7FA',
        ash: '#E4E8F0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 20px 50px -24px rgba(11,30,58,0.35)',
        glow: '0 0 0 1px rgba(217,164,65,0.35), 0 16px 44px -18px rgba(217,164,65,0.4)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
