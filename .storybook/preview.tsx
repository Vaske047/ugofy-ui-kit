import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Preview } from '@storybook/react'
import themeInstance from '../src/theme' // Import the theme instance

// Configure Storybook decorators
const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={themeInstance.getOptions}>
          {' '}
          {/* Pass the theme to ThemeProvider */}
          <Story />
        </ThemeProvider>
      )
    }
  ]
}

export default preview
