import { MockBuilder, MockRender } from 'ng-mocks';
import { TodoListComponent } from './todo-list.component';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../interfaces/todo-item';
import { By } from '@angular/platform-browser';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { TodoFormComponent } from '../todo-form/todo-form.component';

describe('TodoListComponent', () => {
  let item: TodoItem;
  let spectator: Spectator<TodoListComponent>;
  let component: TodoListComponent;
  let formC: TodoFormComponent;
  const createComponent = createComponentFactory({
    component: TodoListComponent,
    imports: [CommonModule],
    componentMocks: [TodoFormComponent, TodoItemComponent],
    mocks: [TodoListService, CommonModule],
    //TODO: revise here the mocks and imports
  });

  // only with this part all the tests will be working :(
  beforeEach(() => {
    return MockBuilder(
      // It can be an array too, if you want to keep and export more than 1 thing
      [
        TodoListComponent,
        TodoListService,
        TodoFormComponent,
        TodoItemComponent,
        CommonModule,
      ]
    );
  });
  //TODO:look here

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    formC = new TodoFormComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the todoList from the service', () => {
    const taskService = spectator.inject(TodoListService);
    spectator.detectChanges();
    // TODO:spy
    expect(taskService.getTodoList()).toEqual(component.todoList);
  });

  //TODO: i moved addItem to another component, look
  it('should add task', () => {
    component.todoList.unshift({ title: 'to do this' });
    spectator.detectChanges();
    // TODO:  //ngmocks.findInstance(TodoItemComponent)
    const compiled = spectator.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('to do this');
  });

  //TODO:i moved addItem to another component, look
  it('should update a task', () => {
    let newItem: TodoItem;
    newItem = {
      title: 'new',
      completed: false,
    };
    console.log(newItem.completed);
    component.todoList.unshift(newItem);
    component.updateItem(newItem, (newItem.completed = true));

    spectator.detectChanges();

    console.log(newItem.completed);

    expect(newItem.completed).toBeTruthy();
  });

  it('should remove task upon click', () => {
    component.todoList.unshift({ title: 'to do', completed: false });
    spectator.detectChanges();

    spectator.debugElement
      .query(By.css('.todo-item'))
      .triggerEventHandler('click', null);
    const compiled = spectator.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('to do');
  });
});
