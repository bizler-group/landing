/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'radial-gradient(72.9% 72.9% at 91.25% 20.1%, #0E535C 0%, #052327 100%)',
        'hero-pattern': 'url("/images/hero-pattern.png")',
      },
    },
  },
  plugins: [],
}
