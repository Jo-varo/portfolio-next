/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        ptsans: ['var(--font-ptsans)'],
        lato: ['var(--font-lato)'],
      },
      animation: {
        'blurred-fade-in': 'blurred-fade-in 0.9s ease-in-out both',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-fade-in': 'pulse-fade-in 0.6s ease-out both',
      },
      keyframes: {
        'blurred-fade-in': {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        'pulse-fade-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          'background-shine': {
            from: {
              backgroundPosition: '0 0',
            },
            to: {
              backgroundPosition: '-200% 0',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
