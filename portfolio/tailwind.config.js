/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "background-soft": "var(--color-background-soft)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        heading: "var(--color-heading)",
        greenAccent: "var(--color-accent)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "Monaco", "Courier New", "monospace"],
        display: ["Source Sans Pro", "Roboto", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
