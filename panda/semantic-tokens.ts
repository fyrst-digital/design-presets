import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
    green: {
        light: { value: '{colors.green.300}'},
        brand: { value: '{colors.green.400}'},
        dawn: { value: '{colors.green.600}'},
    },
    grey: {
        night: { value: '{colors.grey.800}'},
        black: { value: '{colors.grey.900}'}
    }
})