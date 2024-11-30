import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './index'

const CustomThemeProvider = ({
  theme = defaultTheme.getOptions,
  children
}: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default CustomThemeProvider
