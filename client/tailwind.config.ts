import type {Config} from "tailwindcss";
import {STYLES_KEYS} from "./src/helpers/const";

export default {
    content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
    theme: {
        extend: {
            borderRadius: {
                "user": `var(${STYLES_KEYS.borderRadius})`,
            },
            backgroundColor: {
                "user-primary": `var(${STYLES_KEYS.primaryColor})`,
                "user-secondary": `var(${STYLES_KEYS.secondaryColor})`,
                "user-accent": `var(${STYLES_KEYS.accentColor})`,
                "user-background": `var(${STYLES_KEYS.backgroundColor})`,
                "user-text": `var(${STYLES_KEYS.textColor})`,
            },
            fontFamily: {
                'display': `var(${STYLES_KEYS.fontFamilyHeaders}), Montserrat, Roboto, sans-serif`,
                'sans': `var(${STYLES_KEYS.fontFamily}), Roboto, sans-serif`,
            },
            fontSize: {
                'user-small': `var(${STYLES_KEYS.fontSize})`,
                'user-big': `var(${STYLES_KEYS.fontSizeHeaders})`,
            },
            colors: {
                "user-primary": `var(${STYLES_KEYS.primaryColor})`,
                "user-secondary": `var(${STYLES_KEYS.secondaryColor})`,
                "user-accent": `var(${STYLES_KEYS.accentColor})`,
                "user-background": `var(${STYLES_KEYS.backgroundColor})`,
                "user-text": `var(${STYLES_KEYS.textColor})`,
                'text': {
                    50: 'var(--text-50)',
                    100: 'var(--text-100)',
                    200: 'var(--text-200)',
                    300: 'var(--text-300)',
                    400: 'var(--text-400)',
                    500: 'var(--text-500)',
                    600: 'var(--text-600)',
                    700: 'var(--text-700)',
                    800: 'var(--text-800)',
                    900: 'var(--text-900)',
                    950: 'var(--text-950)',
                },
                'background': {
                    50: 'var(--background-50)',
                    100: 'var(--background-100)',
                    200: 'var(--background-200)',
                    300: 'var(--background-300)',
                    400: 'var(--background-400)',
                    500: 'var(--background-500)',
                    600: 'var(--background-600)',
                    700: 'var(--background-700)',
                    800: 'var(--background-800)',
                    900: 'var(--background-900)',
                    950: 'var(--background-950)',
                },
                'primary': {
                    '50': '#f0f6fe',
                    '100': '#deeafb',
                    '200': '#c5dcf8',
                    '300': '#9dc5f3',
                    '400': '#6ea5ec',
                    '500': '#4c85e5',
                    '600': '#3869d8',
                    '700': '#325acf',
                    '800': '#2c46a1',
                    '900': '#283e80',
                    '950': '#1d284e',
                },
                'secondary': {
                    50: 'var(--secondary-50)',
                    100: 'var(--secondary-100)',
                    200: 'var(--secondary-200)',
                    300: 'var(--secondary-300)',
                    400: 'var(--secondary-400)',
                    500: 'var(--secondary-500)',
                    600: 'var(--secondary-600)',
                    700: 'var(--secondary-700)',
                    800: 'var(--secondary-800)',
                    900: 'var(--secondary-900)',
                    950: 'var(--secondary-950)',
                },
                'accent': {
                    50: 'var(--accent-50)',
                    100: 'var(--accent-100)',
                    200: 'var(--accent-200)',
                    300: 'var(--accent-300)',
                    400: 'var(--accent-400)',
                    500: 'var(--accent-500)',
                    600: 'var(--accent-600)',
                    700: 'var(--accent-700)',
                    800: 'var(--accent-800)',
                    900: 'var(--accent-900)',
                    950: 'var(--accent-950)',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
