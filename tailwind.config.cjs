/** @type {import('tailwindcss').Config} */
module.exports = {
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    puger: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    // darkMode: false, // or 'media' or 'class'
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {},
        screens: {
            // 'sm': '640px',
            // 'md': '768px',
        },
        minWidth: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            45: 'calc(50% - 0.25rem)',
        },
        boxShadow: {
            DEFAULT: '0 0 0 0.2rem rgba(0, 0, 0, 0.05)',
            ans: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
            quest: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    media: {
        print: 'print',
        screen: 'screen',
        sm: 'screen and (min-width: 640px)',
        md: 'screen and (min-width: 768px)',
        lg: 'screen and (min-width: 1024px)',
        xl: 'screen and (min-width: 1280px)',
        '2xl': 'screen and (min-width: 1536px)',
    },
};
