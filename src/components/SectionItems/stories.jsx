import { SectionItems } from '.';

export default {
  title: 'SectionItems',
  component: SectionItems,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <SectionItems {...args} />;
