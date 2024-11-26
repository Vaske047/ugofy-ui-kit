import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    disabled: true
  }
}

export const Outlined: Story = {
  args: {
    variant: 'secondary',
    label: 'Outlined Button',
    disabled: false,
    outlined: true
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
}
