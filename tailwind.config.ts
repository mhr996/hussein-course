import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ["var(--font-almarai)", "system-ui", "Arial", "sans-serif"],
        sans: ["var(--font-almarai)", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        navy: {
          DEFAULT: "var(--navy)",
          light: "var(--navy-light)",
          lighter: "var(--navy-lighter)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          dark: "var(--gold-dark)",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
      },
      boxShadow: {
        "elevation-low": "var(--shadow-elevation-low)",
        "elevation-medium": "var(--shadow-elevation-medium)",
        "elevation-high": "var(--shadow-elevation-high)",
        glow: "var(--shadow-glow)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
