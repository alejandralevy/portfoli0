import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';

const meta = {
  component: SectionHeader,
  tags: ['ai-generated'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkSection: Story = {
  args: { index: '01', eyebrow: 'What I did', title: 'Projects shipped' },
};

export const DoSection: Story = {
  args: { index: '02', eyebrow: 'What I do', title: 'From 0 to prod' },
};
