import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder, MockComponents, ngMocks } from 'ng-mocks';
import { InputButtonComponent } from './input-button.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('InputButtonComponentSpectator', () => {
  let spectator: Spectator<InputButtonComponent>;
  // const dependencies = MockBuilder(InputButtonComponent).build();
  const createComponent = createComponentFactory({
    component: InputButtonComponent,
    mocks: [], // services, directives?
    declarations: [...MockComponents()]

  });


  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    const todo = ngMocks.findInstance(TodoItemComponent)
    todo.item
    expect(spectator.component).toBeTruthy();
  });


  it('should have a button class', () => {
    expect(spectator.query('button')).toHaveClass('button');
  });
});
