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
    },
    
   animation: {
      shake: 'shake .8s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite',
    },
    keyframes: {
      shake: {
        '10%, 90%': { transform: 'translateX(-10px)' },
        '20%, 80%': { transform: 'translateX(10px)' },
        '30%, 50%, 70%': { transform: 'translateX(-10px)' },
        '40%, 60%': { transform: 'translateX(10px)' },
      },
    },
  },
  plugins: [],
}

