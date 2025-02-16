import { defineTokens } from '@pandacss/dev'
 
export const colors = defineTokens.colors({
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
})

export const spacing = defineTokens.spacing({
    xs: { value: '8px' },
    sm: { value: '12px' },
    md: { value: '16px' },
    lg: { value: '20px' },
    xl: { value: '24px' },
    '2xl': { value: '32px' },
    '3xl': { value: '40px' },
    '4xl': { value: '48px' },
    '5xl': { value: '56px' },
    '6xl': { value: '64px' },
    '7xl': { value: '72px' },
    '8xl': { value: '80px' },
    '9xl': { value: '96px' },
    '10xl': { value: '128px' },
    '11xl': { value: '144px' },	
    '12xl': { value: '160px' },
})

export const radii = defineTokens.radii({
    sm: { value: '4px' },
    md: { value: '6px' },
    lg: { value: '10px' },
    xl: { value: '16px' },
    '2xl': { value: '20px' },
    '3xl': { value: '24px' },
    '4xl': { value: '32px' },
    '5xl': { value: '40px' },
})

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}