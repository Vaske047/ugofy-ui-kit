import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import TableList from './TableList'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TableList> = {
  title: 'Example/TableList',
  component: TableList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TableList>
export const Primary: Story = {
  args: {
    label: 'Primary TableList',
    backgroundColor: '#ddd'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary TableList'
  }
}
