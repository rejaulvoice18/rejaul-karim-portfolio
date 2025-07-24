import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class', // Enables class-based toggling
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'JetBrains Mono, system-ui, sans-serif'
      },
      colors: {
        bodyColor: '#1c1c22',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  
})
