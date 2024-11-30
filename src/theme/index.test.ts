import '@testing-library/jest-dom/extend-expect'
import theme from './index'
import defaults from './ugofy/defaults'

describe('Test Theme options', () => {
  it('should read default options', () => {
    expect(theme.getOptions).toEqual(defaults)
  })

  it('should fail for not valid options set', () => {
    const invalidOptions = {
      COLORS: {
        red: 'blue'
      }
    }
    expect(() => {
      // @ts-ignore
      theme.setOptions(invalidOptions)
    }).toThrow('Options provided are not valid, check the documentation')
  })

  it('Should set the custom theme with blue color', () => {
    const customTheme = { ...defaults }
    customTheme.COLORS.primary.background = 'blue'
    theme.setOptions(customTheme)
    expect(theme.getOptions.COLORS.primary.background).toEqual('blue')
  })
})
