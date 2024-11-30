import ugofyTheme, { optionsKeys as ugofyOptionsKeys } from './ugofy/defaults'
import { countMissingKeys } from './utilities'
import ThemeOptions from './types'

// Your Theme class, which handles the theme options
class Theme {
  options!: ThemeOptions
  optionKeys: string[] = []
  name: string = ''

  constructor() {
    this.setTheme('ugofy')
  }

  setOptions(options: ThemeOptions) {
    if (!this.checkOptionKeys(options)) {
      throw new Error('Options provided are not valid, check the documentation')
    }
    this.options = options
  }

  setTheme(name: string) {
    this.name = name

    switch (name) {
      case 'dark':
        break
      default:
        this.options = ugofyTheme
        this.optionKeys = ugofyOptionsKeys
    }
  }

  get getOptions() {
    return this.options
  }

  private checkOptionKeys(options: any): boolean {
    return countMissingKeys(options, this.optionKeys) === 0
  }
}

// Export the default theme instance
const themeInstance = new Theme()

export default themeInstance
