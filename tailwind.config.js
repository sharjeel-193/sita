/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                black: '#000000',
                background: '#343333',
                lightGray: '#a8a3a3',
                primaryMain: '#78a663',
                primaryLight: '#bee3ad',
                primaryDark: '#28650e'
            },
            // screens: {
            //     'xs': '480px',
            //     'sm': '640px',
            //     'md': '768px',
            //     'lg': '1024px',
            //     'xl': '1280px'
            // }
        },
    },
    plugins: [],
};
