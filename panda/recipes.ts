import { defineRecipe, defineSlotRecipe } from '@pandacss/dev'

export const card = defineSlotRecipe({
    className: 'card',
    slots: ['wrapper', 'container', 'header', 'body', 'footer'],
    base: {
        wrapper: {
            display: 'block',
            position: 'relative',
            zIndex: '1',
            maxWidth: '100%',
        },
        container: {
            display: 'flex',
            position: 'relative',
            zIndex: '10',
            flexDirection: 'column',
            backgroundColor: 'grey.black',
            maxWidth: '100%',
        }
    },
    variants: {
        outlineSize: {
            none: {
                wrapper: {
                    padding: '0',
                    display: 'contents',
                }
            },
            sm: {
                wrapper: {
                    padding: '3xs',
                }
            },
            md: {
                wrapper: {
                    padding: '2xs',
                }
            }
        },
        outlineRadius: {
            md: {
                wrapper: {
                    borderRadius: 'xl',
                },
                container: {
                    borderRadius: 'xl',
                },
            },
            lg: {
                wrapper: {
                    borderRadius: '2xl',
                },
                container: {
                    borderRadius: '2xl',
                },
            }
        },
        outlineColor: {
            brand: {
                wrapper: {
                    backgroundColor: 'green.brand',
                }
            },
            night: {
                wrapper: {
                    backgroundColor: 'grey.night',
                }
            },
            gradient1: {
                wrapper: {
                    backgroundColor: 'grey.night',
                    bgGradient: 'to-br',
                    gradientFrom: 'green.brand',
                    gradientVia: 'grey.night',
                    gradientTo: 'grey.night'
                }
            }
        }
    },
    compoundVariants: [
        {
            outlineSize: 'sm',
            outlineRadius: 'md',
            css: {
                container: {
                    borderRadius: 'calc( token(spacing.xl) - ( token(spacing.3xs) * 4.5) )',
                },
            },
        },
        {
            outlineSize: 'sm',
            outlineRadius: 'lg',
            css: {
                container: {
                    borderRadius: 'calc( token(spacing.2xl) - ( token(spacing.3xs) * 6.5) )',
                },
            },
        },
        {
            outlineSize: 'md',
            outlineRadius: 'md',
            css: {
                container: {
                    borderRadius: 'calc( token(spacing.xl) - ( token(spacing.2xs) * 3) )',
                },
            },
        },
        {
            outlineSize: 'md',
            outlineRadius: 'lg',
            css: {
                container: {
                    borderRadius: 'calc( token(spacing.2xl) - ( token(spacing.2xs) * 4) )',
                },
            },
        },

    ],
    defaultVariants: {
        outlineSize: 'sm',
        outlineRadius: 'md',
        outlineColor: 'gradient1',
    }
})