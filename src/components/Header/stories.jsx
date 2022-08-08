import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Header {...args} />;
