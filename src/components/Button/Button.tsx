import React from 'react'
import type { ButtonProps } from './types'
import { StyledButton } from './style'

const Button = ({
  icon,
  label,
  handleClick,
  $variant,
  $size,
  disabled,
  transparent,
  outlined,
  cssProps
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={$variant}
      $size={$size}
      disabled={disabled}
      outlined={outlined}
      onClick={handleClick}
      transparent={transparent}
      cssProps={cssProps}
    >
      {icon}
      {label}
    </StyledButton>
  )
}

export default Button
