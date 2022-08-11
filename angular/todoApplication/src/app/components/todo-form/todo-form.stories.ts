import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TodoFormComponent } from './todo-form.component';
export default {
  title: 'Components/TodoForm',
  component: TodoFormComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<TodoFormComponent> = (args: TodoFormComponent) => ({
  props: args,
});
export const Base = Template.bind({});
