import { Styles } from 'styled-components/dist/types'

export interface InputProps {
  id?: string
  placeholder?: string
  type?: 'text' | 'textarea' | 'password' | 'email' | 'number' | 'file'
  label?: string
  name?: string
  required?: boolean
  disabled?: boolean
  autoFocus?: boolean
  value?: string | number
  handleChange?: () => void
  $wrapperCssProps?: Styles<object>
  $labelCssProps?: Styles<object>
  $inputCssProps?: Styles<object>
}

export interface InputWrapperProps {
  $wrapperCssProps?: Styles<object>
}

export interface InputLabelProps {
  $labelCssProps?: Styles<object>
}
