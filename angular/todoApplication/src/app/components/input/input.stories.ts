import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    type: {
      type: 'string',
      defaultValue: 'text',
      description: 'Type of input',
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      control: {
        type: 'select',
      },
    },
    outline: { control: 'text' },
    borderRadius: { control: 'text' },
    border: { control: 'text' },
    color: { control: 'color' },
    labelFontSize: { control: 'text' },
    labelFontWeight: {
      type: 'number',
      defaultValue: '400',
      description: 'Label font weight',
      options: [
        'bold',
        'bolder',
        'lighter',
        'normal',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
      control: {
        type: 'select',
      },
    },
    inputFontSize: { control: 'text' },
    width: { control: 'text' },
  },
} as Meta;

// This creates a Story for the component
const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});
export const Base = Template.bind({});

export const Populated = Template.bind({});

Populated.args = {
inputValue: 'To walk my dog'
};



export const Focus = () => InputComponent
Focus.parameters = { pseudo: { focus: true } }
export const ReadOnly = () => InputComponent
ReadOnly.parameters = { pseudo: { readonly: true } }

export const Disabled = () => InputComponent
Disabled.parameters = { pseudo: { disabled: true } }

export const Placeholder = () => InputComponent
Placeholder.parameters = { pseudo: { placeholder: true } }

export const Active = () => InputComponent
Active.parameters = { pseudo: { active: true } }

