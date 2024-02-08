import type { Meta, StoryObj } from '@storybook/react'
import BuildWaveBall from './WaveBall'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Progressive Bar/Wave Ball',
  component: BuildWaveBall,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    percentage: {
      control: {type: 'range', min: 0, max: 100, step: 3},
      description: 'Percentage of progress'
    },
  },
} satisfies Meta<typeof BuildWaveBall>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    percentage: 2,
  },
}
