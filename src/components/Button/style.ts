import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  background-color: #0f2a3c;
  color: #fff;
  padding: 15px 25px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #fff;
      color: #0f2a3c;
    `};
`
