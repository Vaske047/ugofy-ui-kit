import { ColorsType } from '../types/colors'

const palette = {
  primary: 'rgba(15, 42, 60, 1)', // navy blue
  secondary: 'rgba(255, 255, 255, 1)', // white
  border: 'rgba(225, 225, 225, 1)' // light gray
}

const COLORS: ColorsType = {
  primaryButton: {
    background: palette.primary,
    color: palette.secondary
  },
  secondaryButton: {
    background: palette.secondary,
    color: palette.primary,
    border: palette.border
  }
}
export default COLORS
