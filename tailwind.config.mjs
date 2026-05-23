/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white:    '#fafaf8',
        off:      '#f2f1ee',
        parchment:'#ece7dc',
        sand:     '#d4c9b5',
        border:   '#dddbd7',
        muted:    '#9a9892',
        dark:     '#1a1917',
        mid:      '#4a4945',
        blue: {
          DEFAULT: '#1d4ed8',
          light:   '#eff6ff',
          mid:     '#93c5fd',
          hover:   '#1d40b0',
        },
      },
      fontFamily: {
        head: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,5vw,4rem)', { lineHeight: '1.05' }],
        'display-lg': ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.05' }],
        'display-md': ['clamp(1.75rem,3vw,2.75rem)', { lineHeight: '1.1'  }],
      },
    },
  },
  plugins: [],
};
