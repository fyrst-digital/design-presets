import { definePreset } from '@pandacss/dev'

const panda = definePreset({
    name: 'fyrst-panda-preset',
    theme: {
        tokens: {
            colors: {
                green: {
                    300: {
                        value: '#A3EFAC',
                        description: 'This is a light, pale green color and is references as pale-green'
                    },
                    400: {
                        value: '#05C260',
                        description: 'This is the fyrst brand green color and is referenced as brand-green'
                    },
                    600: {
                        value: '#0E8543',
                        description: 'This is a darker, bolder green color and is referenced as dawn-green'
                    }
                },
                grey: {
                    100: {
                        value: '#F9F9F9',
                    },
                    200: {
                        value: '#EEEEEE',
                    },
                    300: {
                        value: '#CCCCCC',
                    },
                    600: {
                        value: '#444444',
                    },
                    700: {
                        value: '#333333',
                    },
                    800: {
                        value: '#222222',
                    },
                    900: {
                        value: '#191919',
                        description: 'This is the darkest grey color in our design system and replaces black'
                    },
                }
            },
            spacing: {
                sm: { value: '12px' },
                md: { value: '16px' },
                lg: { value: '20px' },
                xl: { value: '24px' },
                '2xl': { value: '32px' },
                '3xl': { value: '40px' },
            }
        },
        extend: {
            breakpoints: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            }
        }
    }
})

export {
    panda
} 
