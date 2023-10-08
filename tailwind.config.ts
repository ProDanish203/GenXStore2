import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        text: '#FFFFFF',
        bg: '#010104',
        primary: '#a70606',
        secondary: '#241414',
        accent: '#d11515',
        darkAccent: '#070008',
      }, 
      screens: {
        xs: '450px'
      }
    },
  },
  plugins: [],
}
export default config
