import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. In praesentium libero, quo voluptatibus, 
    corporis totam eius vitae dolorum, deleniti quod excepturi. 
    Cumque vitae quas laborum. Commodi reprehenderit quo unde est?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
