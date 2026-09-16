/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07080C",
        surface: {
          DEFAULT: "#0D1017",
          card: "#121722",
          muted: "#171E2D",
          hover: "#1A2234",
        },
        primary: {
          DEFAULT: "#F4F4F5",
          muted: "#9195A3",
          dark: "#606575",
        },
        accent: {
          DEFAULT: "#FF4D4D",
          hover: "#FF6666",
          dark: "#CC3D3D",
          glow: "rgba(255, 77, 77, 0.25)",
        },
        docped: {
          DEFAULT: "#10B981",
          teal: "#14B8A6",
          light: "#34D399",
          dark: "#059669",
          glow: "rgba(16, 185, 129, 0.2)",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'accent-subtle': '0 0 15px -3px rgba(255, 77, 77, 0.25)',
        'docped-subtle': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
