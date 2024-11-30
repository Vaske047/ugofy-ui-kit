import { TypoTypes } from '../types/typo'
import { size } from '../typo'

const TYPO: TypoTypes = {
  family: {
    fontMain: 'Noto Sans, sans-serif'
  },
  size: {
    ...size
  },
  weight: {
    light: 300,
    normal: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  },
  transform: {
    lowerCase: 'lowercase',
    none: 'none',
    upperCase: 'uppercase'
  },
  button: {
    primary: size.text14
  }
}

export default TYPO
