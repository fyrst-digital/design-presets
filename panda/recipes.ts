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

export const button = defineRecipe({
    className: 'btn',
    base: {
        display: 'inline flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        lineHeight: '1.5',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        userSelect: 'none',
        transition: 'background-color 300ms',
        cursor: 'pointer',
        _disabled: {
            pointerEvents: 'none',
            opacity: '0.5',
        }
    },
    variants: {
        color: {
            primary: {
                backgroundColor: 'green.pale',
                color: 'grey.black',
                borderColor: 'green.pale', // @todo replace with token
                _hover: {
                    backgroundColor: '#C5F6CB', // @todo replace with token
                },
                _active: {
                    backgroundColor: '#78E284', // @todo replace with token
                }
            },            
            secondary: {
                backgroundColor: 'grey.night',
                color: 'white',
                borderColor: '#444444', // @todo replace with token
                _hover: {
                    backgroundColor: '#333333', // @todo replace with token
                },
                _active: {
                    backgroundColor: 'grey.black', // @todo replace with token
                }
            },

        },
        size: {
            sm: {
                fontSize: 'sm',
                gap: 'sm',
                paddingBlock: 'xs',
                paddingInline: 'lg',
            },
            md: {
                fontSize: 'md',
                gap: 'sm',
                paddingBlock: 'sm',
                paddingInline: 'lg',
            },
            lg: {
                fontSize: 'lg',
                gap: 'md',
                paddingBlock: 'md',
                paddingInline: 'xl',
            },
        },
    },
    defaultVariants: {
        color: 'secondary',
        size: 'sm',
    }
})