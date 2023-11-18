/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '12px'
        },
        extend: {
            colors: {
                primaryDark: '#0A0A20',
                secondaryGrey: '#898CA9',
                purple: {
                    light: '#F0E4FF',
                    silver: '#F0E4FF',
                    orchid: '#9747FF',
                    pink: '#7049C3',
                    dark: '#1C1C2F',
                }
            },
            spacing: {
                '54px': '54px'
            },
            fontSize: {
                '40px': '40px'
            },
            borderRadius: {
                '40px': '40px'
            }
        }
    },
    plugins: []
};
