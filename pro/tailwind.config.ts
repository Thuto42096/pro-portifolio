import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#08090f',
        surface: '#10121d',
        'surface-light': '#1a1d2e',
        'neon-cyan': '#00f3ff',
        'electric-magenta': '#ff0055',
        'acid-yellow': '#ffe600',
        'cyber-green': '#00ff66',
        'pixel-gray': '#2a2d3e',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 8px #00f3ff, 0 0 20px #00f3ff40',
        'neon-magenta': '0 0 8px #ff0055, 0 0 20px #ff005540',
        'neon-green': '0 0 8px #00ff66, 0 0 20px #00ff6640',
        'neon-yellow': '0 0 8px #ffe600, 0 0 20px #ffe60040',
        'pixel-cyan': '4px 4px 0px #00f3ff',
        'pixel-magenta': '4px 4px 0px #ff0055',
        'pixel-yellow': '4px 4px 0px #ffe600',
        'pixel-green': '4px 4px 0px #00ff66',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.4s ease-out',
        'glitch': 'glitch 3s infinite',
        'gas-fill': 'gasFill 2s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 4px #00ff66' },
          '50%': { opacity: '0.5', boxShadow: '0 0 12px #00ff66, 0 0 24px #00ff6660' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -2px)' },
        },
        gasFill: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
