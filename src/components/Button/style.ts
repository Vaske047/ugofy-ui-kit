import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme?.COLORS?.primaryButton?.background};
  color: ${({ theme }) => theme?.COLORS?.primaryButton?.color};
  padding: ${({ theme }) => theme?.SIZE?.padding?.primaryButton};
  font-size: ${({ theme }) => theme?.TYPO?.size?.text14};
  border-radius: ${({ theme }) => theme?.SIZE?.borderRadius?.primaryButton};
  border: none;
  cursor: pointer;
  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${({ theme }) =>
        theme?.COLORS?.secondaryButton?.background};
      color: ${({ theme }) => theme?.COLORS?.secondaryButton?.color};
    `};
  ${({ $variant }) =>
    $variant === 'icon' &&
    css`
      background-color: ${({ theme }) => theme?.COLORS?.iconButton?.background};
      color: ${({ theme }) => theme?.COLORS?.secondaryButton?.color};
      padding: ${({ theme }) => theme?.SIZE?.padding?.iconButton};
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: ${({ theme }) => theme?.SHADOW?.opacity?.high};
      cursor: not-allowed;
    `};
  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid ${({ theme }) => theme?.COLORS?.secondaryButton?.border};
    `};
  ${({ transparent }) =>
    transparent &&
    css`
      background: transparent;
    `};
  ${({ $size }) =>
    $size === 'small' &&
    css`
      padding: ${({ theme }) => theme?.SIZE?.padding?.smallButton};
    `};
  ${({ cssProps }) =>
    cssProps &&
    css`
      ${cssProps}
    `}
`
