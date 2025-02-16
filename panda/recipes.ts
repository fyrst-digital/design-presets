import { defineRecipe, defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
    className: 'card',
    slots: ['wrapper', 'container', 'header', 'body', 'footer'],
    base: {
        wrapper: {
            display: 'block',
            position: 'relative',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
        }
    },
    variants: {
        outlineSize: {
            md: {
                wrapper: {
                    padding: 'sm',
                }
            }
        },
    },
    defaultVariants: {
        outlineSize: 'md'
    }
})