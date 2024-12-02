import COLORS from './colors'
import TYPO from './typo'
import SIZE from './layout'
import SHADOW from './shadow'
import SETTINGS from './settings'
import ICONS from './icons'
import { getObjectKeys } from '../utilities'

export const optionsKeys = [
  ...getObjectKeys(COLORS, 'COLORS'),
  ...getObjectKeys(TYPO, 'TYPO'),
  ...getObjectKeys(SIZE, 'SIZE'),
  ...getObjectKeys(SHADOW, 'SHADOW'),
  ...getObjectKeys(SETTINGS, 'SETTINGS'),
  ...getObjectKeys(ICONS, 'ICONS')
]

export default {
  COLORS,
  TYPO,
  SIZE,
  SHADOW,
  SETTINGS,
  ICONS
}
