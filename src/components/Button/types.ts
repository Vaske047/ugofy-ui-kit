export interface ButtonProps {
  label?: string
  handleClick?: () => void
  variant?: string
  disabled?: boolean
  icon?: React.ReactNode
  outlined?: boolean
}
