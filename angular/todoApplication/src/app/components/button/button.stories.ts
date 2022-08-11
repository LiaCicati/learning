import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {

    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderRadius: { control: 'text' },
  },
  // variant: {
  //   options: ['primary', 'secondary'],
  //   control: { type: 'radio' },
  // },


} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const Base = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Hello',
  size: 'large',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};


export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};


export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Active = Template.bind({});
Active.parameters = { pseudo: { active: true } };

export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };

export const Visited = Template.bind({});
Visited.parameters = { pseudo: { visited: true } };


Base.parameters = {
  variants: {
    enable: true
  },
};
