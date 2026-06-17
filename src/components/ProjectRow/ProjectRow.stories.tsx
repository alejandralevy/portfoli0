import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectRow } from './ProjectRow';

const ssc = {
  n: '01',
  name: 'SecurityScorecard',
  role: 'Senior Engineer · Technical Product Manager',
  year: '2023',
  desc: 'RBAC permissions + Smart Answer AI',
  color: '#1FB89E',
};

const meta = {
  component: ProjectRow,
  tags: ['ai-generated'],
} satisfies Meta<typeof ProjectRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { project: ssc } };

export const Decentraland: Story = {
  args: {
    project: {
      n: '03',
      name: 'Decentraland',
      role: 'Software Engineer',
      year: '2022',
      desc: 'Top Scenes platform',
      color: '#FF2D55',
    },
  },
};
