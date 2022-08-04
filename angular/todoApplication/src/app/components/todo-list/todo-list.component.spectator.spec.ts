import { TodoListComponent } from './todo-list.component';
import { Spectator, createComponentFactory, SpyObject } from '@ngneat/spectator';
import { MockBuilder, MockRender } from 'ng-mocks';
import { TodoListService } from '../../services/todo-list.service';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';
import { InputButtonComponent } from '../input-button/input-button.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('TodoListSpectator', () => {
  let spectator: Spectator<TodoListComponent>;
  const dependencies = MockBuilder(TodoListComponent).build();
  const createComponent = createComponentFactory({
    component: TodoListComponent,
    imports: [
      TodoListComponent,
      TodoListService,
      InputButtonComponent,
      TodoItemComponent,
      CommonModule,
    ],
    mocks: [TodoListService],
    ...dependencies,
  });

let listService: SpyObject<TodoListService>;
  beforeEach(() => {spectator = createComponent();
    listService = spectator.inject(TodoListService);
  listService.getTodoList.and.returnValue(['a'])
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  // it('should use the todoList from the service', () => {
  //   const taskService = spectator.inject(TodoListService);
  //   console.log('################################');

  //   console.log(taskService.getTodoList());
  //   console.log(spectator.component.todoList);

  //   expect(taskService.getTodoList()).toEqual(spectator.component.todoList);
  // });
});
