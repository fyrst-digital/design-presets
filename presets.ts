import { definePreset } from '@pandacss/dev'
import { colors, spacing, radii, breakpoints } from './panda/tokens'
import { colors as semanticColors } from './panda/semantic-tokens'
import { card } from './panda/recipes'

const panda = definePreset({
    name: 'fyrst-panda-preset',
    theme: {
        tokens: {
            colors: colors,
            spacing: spacing,
            radii: radii
        },
        semanticTokens: {
            colors: semanticColors
        },
        extend: {
            breakpoints: breakpoints,
            slotRecipes: {
                card: card
            }
        }
    }
})

export {
    panda
} 
