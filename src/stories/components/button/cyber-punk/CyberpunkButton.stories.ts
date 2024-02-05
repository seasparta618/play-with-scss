import type { Meta, StoryObj } from '@storybook/react'

import { BuildCyberpunkButton } from './CyberpunkButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button/Cyberpunk Button',
  component: BuildCyberpunkButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: {
      control: 'text',
      default: 'Now Loading...',
      description: 'text in button',
    },
  },
} satisfies Meta<typeof BuildCyberpunkButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Now loading...',
  },
}
