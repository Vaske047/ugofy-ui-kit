import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Ugofy',
    brandUrl: 'https://ugofy.com',
    brandImage: '/logo-text.png',
    brandTarget: '_self'
  })
})
