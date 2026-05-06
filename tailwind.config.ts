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
        'brand-primary': '#8c5526',
        'brand-secondary': '#b87333',
        'brand-bg': '#0A0A0A',
        'brand-surface': '#1A1A1A',
        'brand-border': '#2A2A2A',
        'brand-heading': '#FFFFFF',
        'brand-body': '#E0E0E0',
        // Legacy aliases kept to preserve existing route behavior during migration.
        'brand-navy': '#0A0A0A',
        'brand-mid': '#1A1A1A',
        'brand-deep': '#2A2A2A',
        'brand-cyan': '#8c5526',
        'brand-gold': '#b87333',
        'brand-light': '#E0E0E0',
      },
      fontFamily: {
        heading: ['"Work Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
