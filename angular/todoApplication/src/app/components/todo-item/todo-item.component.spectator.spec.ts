import { TodoItemComponent } from './todo-item.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder } from 'ng-mocks';

describe('TodoItemComponentSpectator', () => {
  let spectator: Spectator<TodoItemComponent>;
  const dependencies = MockBuilder(TodoItemComponent).build();
  const createComponent = createComponentFactory({
    component: TodoItemComponent,
    ...dependencies,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
