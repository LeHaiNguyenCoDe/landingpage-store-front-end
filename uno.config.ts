import { defineConfig } from 'unocss'
import { presetFluid } from 'unocss-preset-fluid'

export default defineConfig({
  presets: [
    presetFluid({
      maxWidth: 1440,
      minWidth: 375,
      extendMaxWidth: null,
      extendMinWidth: null,
      remBase: 16,
      useRemByDefault: false,
      ranges: null,
      commentHelpers: false,
    }),
  ],
  theme: {
    extend: {
      typography: {
        fontSize: {
          xs: [12, 16],
          sm: [14, 18],
          md: [18, 24],
          lg: [22, 30],
        },
      },
    },
  },
})
