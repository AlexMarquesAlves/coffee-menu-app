import { Section } from '.';

export default {
  title: 'Section',
  component: Section,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Section {...args} />;
