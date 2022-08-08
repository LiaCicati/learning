import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TodoItemComponent } from './todo-item.component';
// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/TodoItem',
  // The component related to the Stories
  component: TodoItemComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<TodoItemComponent> = () => ({
  component: TodoItemComponent,
  template: `<app-input-button></app-input-button>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!
