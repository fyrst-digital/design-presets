import { definePreset } from '@pandacss/dev'
import { colors, spacing, radii, breakpoints } from './panda/tokens'

const panda = definePreset({
    name: 'fyrst-panda-preset',
    theme: {
        tokens: {
            colors: colors,
            spacing: spacing,
            radii: radii
        },
        extend: {
            breakpoints: breakpoints
        }
    }
})

export {
    panda
} 
