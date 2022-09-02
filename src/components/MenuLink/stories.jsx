import { MenuLink } from '.';

export default {
  title: 'Menu Link',
  component: MenuLink,
  args: {
    children: 'não sei',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
