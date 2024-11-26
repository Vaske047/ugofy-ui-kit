import React from 'react'
import type { ButtonProps } from './types'
import { StyledButton } from './style'

const Button = ({ label, handleClick, variant }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {label}
    </StyledButton>
  )
}

export default Button
