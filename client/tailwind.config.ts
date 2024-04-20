import type {Config} from "tailwindcss";

export default {
    content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "user-primary": "var(--user-primary-color)",
                "user-secondary": "var(--user-secondary-color)",
                "user-accent": "var(--user-accent-color)",
                "user-background": "var(--user-background-color)",
                "user-text": "var(--user-text-color)",
            },
        },
    },
    plugins: [],
} satisfies Config;
