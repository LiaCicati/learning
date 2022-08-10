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

} as Meta;

// This creates a Story for the component
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});
export const Base = Template.bind({});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
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


export const Hover = () => ButtonComponent;
Hover.parameters = { pseudo: { hover: true } };

