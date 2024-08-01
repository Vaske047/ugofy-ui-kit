import { lazy } from 'react'

export const Button = lazy(
  () => import(/* webpackChunkName: "Button" */ './Button/Button')
)
export const TableList = lazy(
  () => import(/* webpackChunkName: "Input" */ './TableList/TableList')
)
