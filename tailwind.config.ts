/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF',
        'primary-dark': '#0099CC',
        dark: '#0A0A0A',
        surface: '#111827',
        light: '#F8FAFC',
        'text-main': '#1E293B',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}
