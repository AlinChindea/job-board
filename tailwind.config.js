/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                'black': '#060606',
                'j-white': '#e8dedb'
            }
        },
    },
    plugins: [],
}

