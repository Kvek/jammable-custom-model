import type { Config } from "tailwindcss";

const config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        primary: "hsl(var(--foreground) / 7%)",
        primaryShade: "hsl(var(--foreground) / 10%)",
        rainbow: "linear-gradient(90deg,#44ff9a -.55%,#44b0ff 22.86%,#8b44ff 48.36%,#f64 73.33%,#ebff70 99.34%)",
      },
      backgroundImage: {
        borderPattern: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='rgb(255,255,255,.5)' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='10' stroke-linecap='round'/%3e%3c/svg%3e");`,
      },
      borderColor: {
        primary: "hsl(var(--foreground) / 7%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        primary: "10px",
        secondary: "6px",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        button: {
          pink: "hsl(var(--button-pink))",
          purple: "hsl(var(--button-purple))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        pink: "hsl(var(--pink))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      height: {
        content: "var(--content)",
        drawer: "var(--drawer)",
        navbar: "var(--navbar)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      margin: {
        "x-pad": "calc(var(--sidebar) + 16px)",
        "y-pad": "calc(var(--navbar))",
      },
      maxHeight: {
        content: "var(--content)",
      },
      minHeight: {
        content: "var(--content)",
      },
      width: {
        sidebar: "var(--sidebar)",
      },
    },
  },
} satisfies Config;

export default config;
