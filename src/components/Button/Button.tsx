import React from 'react'
import type { ComponentProps } from './types'

const Button = ({
  label,
  onClick,
  type,
  primary,
  size,
  backgroundColor
}: ComponentProps) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <div className={type} onClick={handleClick}>
      {label}
      {primary}
      {size}
      {backgroundColor}
    </div>
  )
}

export default Button
