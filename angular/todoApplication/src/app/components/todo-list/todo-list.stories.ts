import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TodoListComponent } from './todo-list.component';
// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/TodoList',
  // The component related to the Stories
  component: TodoListComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<TodoListComponent> = (args: TodoListComponent) => ({
  props: args,
});
export const Base = Template.bind({});
