import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import type { ButtonProps } from './types'
import '@testing-library/jest-dom'

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    label: 'Click Me',
    handleClick: jest.fn(),
    variant: 'primary',
    disabled: false
  }

  it('renders the button with correct label', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByText(/Click Me/i)
    expect(button).toBeInTheDocument()
  })

  it('calls the handleClick function when clicked', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByText(/Click Me/i)
    fireEvent.click(button)
    expect(defaultProps.handleClick).toHaveBeenCalled()
  })

  it('is disabled when the disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />)
    const button = screen.getByText(/Click Me/i)
    expect(button).toBeDisabled()
  })
})
