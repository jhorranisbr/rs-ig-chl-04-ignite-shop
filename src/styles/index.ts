import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214', // background
      gray800: '#202024', // elements
      gray300: '#8D8D99', // icon
      gray200: '#C4C4CC', // text
      gray100: '#E1E1E6', // title

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})