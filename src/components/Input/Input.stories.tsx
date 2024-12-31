import React from 'react'
import Input from './Input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {}
}
