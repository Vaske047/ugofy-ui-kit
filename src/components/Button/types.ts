export interface ButtonProps {
  label?: string
  handleClick?: () => void
  $variant?: 'primary' | 'secondary' | 'icon'
  disabled?: boolean
  icon?: React.ReactNode
  outlined?: boolean
  transparent?: boolean
}
