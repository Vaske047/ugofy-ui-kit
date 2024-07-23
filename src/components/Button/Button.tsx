import React from 'react'
import { ComponentProps } from './types'

const Button = ({ label, onClick, type }: ComponentProps) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <div className={type} onClick={handleClick}>
      {label}
    </div>
  )
}

export default Button
