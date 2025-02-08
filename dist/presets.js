import { definePreset } from '@pandacss/dev';
import { colors, spacing, breakpoints } from './panda/tokens';
const panda = definePreset({
    name: 'fyrst-panda-preset',
    theme: {
        tokens: {
            colors: colors,
            spacing: spacing
        },
        extend: {
            breakpoints: breakpoints
        }
    }
});
export { panda };
