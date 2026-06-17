import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  component: Tag,
  tags: ['ai-generated'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'TypeScript' } };
export const Long: Story = { args: { children: 'Stakeholder Alignment' } };
