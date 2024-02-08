import type { Meta, StoryObj } from '@storybook/react'
import BuildCyberpunkProgressiveBar from './CyberpunkProgressiveBar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ProgressiveBar/Cyberpunk Progressive Bar',
  component: BuildCyberpunkProgressiveBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    progress: {
      control: {type: 'select'},
      options: [0, 20, 25, 40, 55, 66, 70, 87, 90, 100],
      default: 20,
      description: 'current progress',
    },
  },
} satisfies Meta<typeof BuildCyberpunkProgressiveBar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    progress: 20,
  },
}
