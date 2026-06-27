import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: "#050506",
        charcoal: {
          900: "#0A0A0C",
          800: "#101013",
          700: "#17171B",
          600: "#222228",
          500: "#34343C",
        },
        smoke: "#8A8A93",
        fog: "#C9C9D1",
        // NOTE: token names kept for stability; values are the warm luxury palette.
        // "electric" = ember/flame orange · "volt" = champagne gold.
        electric: {
          DEFAULT: "#FF6B35",
          deep: "#E0481C",
          soft: "#FF9466",
        },
        volt: {
          DEFAULT: "#F6B23E",
          deep: "#D2942A",
          soft: "#FFD37A",
        },
        danger: "#FF4D4D",
        // shadcn semantic tokens (mapped to the brand)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 11vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "h1": ["clamp(2.6rem, 6vw, 6rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "h2": ["clamp(2rem, 4vw, 3.8rem)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        "h3": ["clamp(1.4rem, 2.2vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1.05rem, 1.3vw, 1.25rem)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 10px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      spacing: {
        section: "clamp(6rem, 12vw, 12rem)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      backgroundImage: {
        "energy": "linear-gradient(115deg, #FFC24B 0%, #FF6B35 55%, #E0481C 100%)",
        "energy-soft": "linear-gradient(120deg, rgba(255,107,53,.18), rgba(246,178,62,.18))",
        "aurora": "radial-gradient(60% 60% at 50% 40%, rgba(255,107,53,.28), transparent 70%)",
        "sheen": "linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.015))",
        "grid-fade": "linear-gradient(to bottom, transparent, #050506 80%)",
      },
      boxShadow: {
        "glow-blue": "0 0 50px -12px rgba(255,107,53,.6)",
        "glow-volt": "0 0 50px -12px rgba(246,178,62,.5)",
        "card": "0 24px 60px -24px rgba(0,0,0,.8)",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseglow: "pulseglow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
