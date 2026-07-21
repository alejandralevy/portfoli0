import type { Meta, StoryObj } from '@storybook/react-vite';
import 'storybook/test';
import { Text } from './Text';

const meta = {
  component: Text,
  tags: ['ai-generated'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: 'display', children: 'Alejandra Levy' },
};

export const DisplayItalic: Story = {
  args: { variant: 'display-italic', children: 'Senior Engineer' },
};

export const Heading: Story = {
  args: { variant: 'heading', children: 'Projects shipped' },
};

export const Body: Story = {
  args: { variant: 'body', children: 'I like turning a vague idea into a roadmap, designing the flows, writing the React, and getting it live.' },
};

export const Label: Story = {
  args: { variant: 'label', children: 'What I do' },
};

export const Mono: Story = {
  args: { variant: 'mono', children: 'alelevy15@gmail.com' },
  play: async ({ canvas }) => {
    const el = canvas.getByText('alelevy15@gmail.com');
    const style = getComputedStyle(el);
    // CssCheck: JetBrains Mono should be loaded if CSS is working
    const families = style.fontFamily;
    if (!families) throw new Error('fontFamily is empty — CSS may not be loaded');
  },
};

export const CssCheck: Story = {
  args: { variant: 'display-italic', children: 'Senior Engineer' },
  play: async ({ canvas }) => {
    const el = canvas.getByText('Senior Engineer');
    const color = getComputedStyle(el).color;
    // --color-accent resolves to #C77B4A = rgb(199, 123, 74)
    if (color !== 'rgb(199, 123, 74)') {
      throw new Error(`Expected accent color rgb(199, 123, 74), got: ${color}`);
    }
  },
};
