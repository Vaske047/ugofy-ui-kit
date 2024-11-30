import COLORS from './colors'
import TYPO from './typo'
import SIZE from './layout'
import SETTINGS from './settings'
import { getObjectKeys } from '../utilities'

export const optionsKeys = [
  ...getObjectKeys(COLORS, 'COLORS'),
  ...getObjectKeys(TYPO, 'TYPO'),
  ...getObjectKeys(SIZE, 'SIZE'),
  ...getObjectKeys(SETTINGS, 'SETTINGS')
]

export default {
  COLORS,
  TYPO,
  SIZE,
  SETTINGS
}
