import React from 'react'
import type { ButtonProps } from './types'
import { StyledButton } from './style'

const Button = ({ label, onClick, variant }: ButtonProps) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {label}
    </StyledButton>
  )
}

export default Button
