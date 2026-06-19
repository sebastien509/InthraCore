// tailwind.config.js (for InthraCore)
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        inthra: {
          primary: '#4CAF50',
          secondary: '#FF4081',
          accent: '#FF9800',
        },
        // Keep the existing surface/on-surface tokens from the HTML design
        surface: '#f7f9fb',
        'on-surface': '#191c1e',
        'on-surface-variant': '#45464d',
        'surface-container-low': '#f2f4f6',
        'surface-container-highest': '#e0e3e5',
        outline: '#76777d',
      },
      fontFamily: {
        'headline-xl': ['Hanken Grotesk', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'display-lg-mobile': ['Hanken Grotesk', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'headline-lg': ['Hanken Grotesk', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        'display-lg': ['Hanken Grotesk', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'display-lg': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        'margin-desktop': '64px',
        'max-width': '1280px',
        'margin-mobile': '20px',
        'editorial-width': '720px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
};