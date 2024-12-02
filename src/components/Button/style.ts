import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  background-color: ${({ theme }) => theme?.COLORS?.primaryButton?.background};
  color: ${({ theme }) => theme?.COLORS?.primaryButton?.color};
  font-size: ${({ theme }) => theme?.TYPO?.button?.primary};
  padding: ${({ theme }) => theme?.SIZE?.padding?.primaryButton};
  font-size: ${({ theme }) => theme?.TYPO?.size?.text14};
  border-radius: ${({ theme }) => theme?.SIZE?.borderRadius?.primaryButton};
  border: none;
  cursor: pointer;
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }) =>
        theme?.COLORS?.secondaryButton?.background};
      color: ${({ theme }) => theme?.COLORS?.secondaryButton?.color};
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `};
  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid #e1e1e1;
    `};
`
