import { TodoListComponent } from './todo-list.component';
import { Spectator, createComponentFactory, SpyObject } from '@ngneat/spectator';
import { MockBuilder, MockRender } from 'ng-mocks';
import { TodoService } from '../../services/todo-list.service';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

describe('TodoListSpectator', () => {
  let spectator: Spectator<TodoListComponent>;
  const dependencies = MockBuilder(TodoListComponent).build();
  const createComponent = createComponentFactory({
    component: TodoListComponent,
    imports: [
      TodoListComponent,
      TodoService,
      TodoFormComponent,
      TodoItemComponent,
      CommonModule,
    ],
    mocks: [TodoService],
    ...dependencies,
  });

let listService: SpyObject<TodoService>;
  beforeEach(() => {spectator = createComponent();
    listService = spectator.inject(TodoService);
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
