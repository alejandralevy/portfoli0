import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Get in touch →' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /get in touch/i });
    if (!btn) throw new Error('Button not found');
  },
};

export const Accent: Story = {
  args: { variant: 'accent', children: 'Download CV' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'View work' },
};

export const TextVariant: Story = {
  args: { variant: 'text', children: 'Read more →' },
};
