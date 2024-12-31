import styled, { css } from 'styled-components'
import { InputLabelProps, InputProps, InputWrapperProps } from './types'

export const StyledInputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${({ $wrapperCssProps }) =>
    $wrapperCssProps &&
    css`
      ${$wrapperCssProps}
    `}
`

export const StyledLabel = styled.label<InputLabelProps>`
  ${({ $labelCssProps }) =>
    $labelCssProps &&
    css`
      ${$labelCssProps}
    `}
`

export const StyledInput = styled.input<InputProps>``
