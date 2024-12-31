import React from 'react'
import type { InputProps } from './types'
import { StyledInput, StyledInputWrapper, StyledLabel } from './style'

const Input = ({
  id,
  name,
  placeholder = 'text',
  type,
  label,
  required = false,
  value,
  $inputCssProps,
  $labelCssProps,
  $wrapperCssProps
}: InputProps) => {
  return (
    // <div className='input-wrapper'>
    //   {!!label && <label htmlFor={id}>{label}</label>}
    //   {type === 'textarea' ? (
    //     <textarea id={id} name={name} placeholder={placeholder} />
    //   ) : (
    //     <input id={id} name={name} type={type} placeholder={placeholder} />
    //   )}
    // </div>
    <StyledInputWrapper $wrapperCssProps={$wrapperCssProps}>
      <StyledLabel htmlFor={id} $labelCssProps={$labelCssProps}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        $inputCssProps={$inputCssProps}
        value={value}
      />
    </StyledInputWrapper>
  )
}

export default Input
