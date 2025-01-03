import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import theme from '../../theme'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button', // Always include a title
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 30px)'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    $variant: 'primary',
    label: 'Primary Button',
    disabled: false,
    handleClick: () => console.log('test')
  }
}

export const Disabled: Story = {
  args: {
    $variant: 'primary',
    label: 'Disabled Button',
    disabled: true,
    $cssProps: {},
    $size: 'large'
  }
}

export const Outlined: Story = {
  args: {
    $variant: 'secondary',
    label: 'Outlined Button',
    disabled: false,
    $outlined: true
  }
}

export const Secondary: Story = {
  args: {
    $variant: 'secondary',
    label: 'Secondary Button'
  }
}

export const IconButton: Story = {
  args: {
    $variant: 'icon',
    $icon: theme.getOptions.ICONS.edit
  }
}

export const SmallButton: Story = {
  args: {
    $variant: 'primary',
    label: 'Small Button',
    $size: 'small'
  }
}
