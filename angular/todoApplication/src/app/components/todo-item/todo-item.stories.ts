import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { TodoItemComponent } from './todo-item.component';
export default {
  title: 'Components/TodoItem',
  component: TodoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<TodoItemComponent> = (args: TodoItemComponent) => ({
  props: args,
});
export const Base = Template.bind({});

// export const Checked = Template.bind({});

// Checked.args = {

// };
