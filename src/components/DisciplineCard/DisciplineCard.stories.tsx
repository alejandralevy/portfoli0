import type { Meta, StoryObj } from '@storybook/react-vite';
import { DisciplineCard } from './DisciplineCard';

const meta = {
  component: DisciplineCard,
  tags: ['ai-generated'],
} satisfies Meta<typeof DisciplineCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Engineering: Story = {
  args: {
    discipline: {
      title: 'Engineering',
      desc: 'Senior React & full-stack. I write the production code and ship it — leaning on AI to move faster.',
      tools: ['TypeScript', 'React', 'Next.js', 'Node.js', 'SQL'],
    },
  },
};

export const Product: Story = {
  args: {
    discipline: {
      title: 'Product',
      desc: 'Discovery, roadmaps, and delivery.',
      tools: ['Agile', 'Scrum', 'Roadmapping'],
    },
  },
};
