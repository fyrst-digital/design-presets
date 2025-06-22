import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
    green: {
        pale: { value: '{colors.green.100}'},
        day: { value: '{colors.green.300}'},
        brand: { value: '{colors.green.400}'},
        dawn: { value: '{colors.green.600}'},
    },
    grey: {
        dawn: { value: '{colors.grey.300}'},
        dusk: { value: '{colors.grey.600}'},
        night: { value: '{colors.grey.800}'},
        black: { value: '{colors.grey.900}'}
    },
    primary: {
        value: { base: '{colors.green.pale}', _light: '{colors.green.day}' }
    },
})