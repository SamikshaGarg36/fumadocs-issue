import { createPreset } from 'fumadocs-ui/tailwind-plugin';

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: ["class"],
    presets: [createPreset()],
    content: [
        './node_modules/fumadocs-ui/dist/**/*.js',
        "./pages/**/*.{js,jsx,ts,tsx,mdx,mjs}",
        "./components/**/*.{js,jsx,ts,tsx,mdx,mjs}",
        "./app/**/*.{js,jsx,ts,tsx,mdx,mjs}",
        "./src/**/*.{js,jsx,ts,tsx,mdx,mjs}",
        "./@/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
            xs: ["0.8125rem", { lineHeight: "1.5rem" }],
            sm: ["0.875rem", { lineHeight: "1.5rem" }],
            base: ["1rem", { lineHeight: "1.75rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }],
        },
        typography: require("./typography"),
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        screens: {
            // STICK TO THIS ONE WHERE POSSIBLE
            big: "900px",
            // DEFAULT BREAKPOINTS:
            xs: "420px",
            undersmall: { max: "599px" },
            // EDITED
            sm: "600px",
            // => @media (min-width: 640px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            mdl: "880px", //
            lg: "1024px",
            // => @media (min-width: 1024px) { ... }
            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            "2xl": "1400px",
            compact: "720px",
            xxs: "450px",
        },
        extend: {
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: 0,
                    },
                },
                grid: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "border-beam": {
                    "100%": {
                        "offset-distance": "100%",
                    },
                },
                "image-glow": {
                    "0%": {
                        opacity: "0",
                        "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)",
                    },
                    "10%": {
                        opacity: "0.7",
                        "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
                    },
                    "100%": {
                        opacity: "0.4",
                    },
                },
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(-10px)" },
                    to: { opacity: "1", transform: "none" },
                },
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "none" },
                },
                shimmer: {
                    "0%, 90%, 100%": {
                        "background-position": "calc(-100% - var(--shimmer-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position": "calc(100% + var(--shimmer-width)) 0",
                    },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                text: "text 5s ease infinite",
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                "image-glow": "image-glow 4100ms 600ms ease-out forwards",
                "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
                "fade-up": "fade-up 1000ms var(--animation-delay, 0ms) ease forwards",
                shimmer: "shimmer 8s infinite",
                marquee: "marquee var(--duration) infinite linear",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
                grid: "grid 15s linear infinite",
                meteor: "meteor 5s linear infinite",
            },
            colors: {
                // light mode
                "updatemaker-accent": "#ffffff",
                "updatemaker-mediumaccent": "#1b42c0",
                "updatemaker-darkaccent": "#9ab903",
                "updatemaker-lightaccent": "#ecf8bd",
                "updatemaker-offwhite": "#d4dee4",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(0 0% 0%)",
                foreground: "hsl(0 0% 98%)",
                tremor: {
                    brand: {
                        faint: "#eff6ff", // blue-50
                        muted: "#bfdbfe", // blue-200
                        subtle: "#60a5fa", // blue-400
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#1d4ed8", // blue-700
                        inverted: "#ffffff", // white
                    },
                    background: {
                        muted: "#f9fafb", // gray-50
                        subtle: "#f3f4f6", // gray-100
                        DEFAULT: "#ffffff", // white
                        emphasis: "#374151", // gray-700
                    },
                    border: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    ring: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    content: {
                        subtle: "#9ca3af", // gray-400
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#374151", // gray-700
                        strong: "#111827", // gray-900
                        inverted: "#ffffff", // white
                    },
                },
                // dark mode
                "dark-tremor": {
                    brand: {
                        faint: "#0B1229", // custom
                        muted: "#172554", // blue-950
                        subtle: "#1e40af", // blue-800
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#60a5fa", // blue-400
                        inverted: "#030712", // gray-950
                    },
                    background: {
                        muted: "#131A2B", // custom
                        subtle: "#1f2937", // gray-800
                        DEFAULT: "#111827", // gray-900
                        emphasis: "#d1d5db", // gray-300
                    },
                    border: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    ring: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    content: {
                        subtle: "#4b5563", // gray-600
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#e5e7eb", // gray-200
                        strong: "#f9fafb", // gray-50
                        inverted: "#000000", // black
                    },
                },
            },
            boxShadow: {
                // light
                "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                // dark
                "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            borderRadius: {
                "tremor-small": "0.375rem",
                "tremor-default": "0.5rem",
                "tremor-full": "9999px",
            },
            backgroundImage: {
                "feature-gradient": "linear-gradient(90deg, rgba(212,254,0,1) 27%, rgba(154,185,3,1) 94%)",
            },
            fontSize: {
                "tremor-label": ["0.75rem"],
                "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
                "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
                "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
            },
            fontFamily: {
                default: ["Inter", "system-ui", "sans-serif"],
                updatemaker: ["Lexend", "system-ui", "sans-serif"],
            },
            screens: {
                compact: "720px",
                xxs: "450px",
            },
            maxWidth: {
                lg: "33rem",
                "2xl": "40rem",
                "3xl": "50rem",
                "5xl": "66rem",
            },
            opacity: {
                1: "0.01",
                2.5: "0.025",
                7.5: "0.075",
                15: "0.15",
            },
        },
    },
    safelist: [
        {
            pattern:
                /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-"],
        },
        {
            pattern:
                /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
    ],
    plugins: [
    ],
};
