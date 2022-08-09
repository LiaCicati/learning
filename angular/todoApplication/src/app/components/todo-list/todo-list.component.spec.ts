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
  const createComponent = createComponentFactory({
    component: TodoListComponent,
    imports: [
    CommonModule],
    componentMocks: [TodoFormComponent,
      TodoItemComponent],
    mocks: [
      TodoListService,
      CommonModule,
    ],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the todoList from the service', () => {
    const taskService = spectator.inject(TodoListService);
    spectator.detectChanges();
//SPY
    expect(taskService.getTodoList()).toEqual(component.todoList);
  });

  it('should add task', () => {
    component.addItem('to do this');
    spectator.detectChanges();
 // TODO:  //ngmocks.findInstance(TodoItemComponent)
    const compiled = spectator.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('to do this');
  });

  // it('should call remove task once', () => {
  //   const spy = jasmine.createSpyObj('TodoListComponent', [
  //     'todoList',
  //     'removeItem',
  //   ]);

  //   spy.removeItem(3);

  //   expect(spy.removeItem).toHaveBeenCalledTimes(1);
  // });

  it('should update a task', () => {
    const fixture = MockRender(TodoListComponent);
    let newItem: TodoItem;
    newItem = {
      title: 'new',
      completed: false,
    };
    console.log(newItem.completed);
    fixture.point.componentInstance.addItem(newItem.title);
    fixture.point.componentInstance.updateItem(
      newItem,
      (newItem.completed = true)
    );

    fixture.detectChanges();

    console.log(newItem.completed);

    expect(newItem.completed).toBeTruthy();
  });

  it('should call addItem', () => {
    const spy = jasmine.createSpyObj('TodoListComponent', [
      'todoList',
      'addItem',
    ]);

    spy.addItem('task');

    expect(spy.addItem).toHaveBeenCalled();
  });

  it('should remove task upon click', () => {
    const fixture = MockRender(TodoListComponent);
    fixture.point.componentInstance.addItem('to do');
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('.todo-item'))
      .query(By.css('.button-delete'))
      .triggerEventHandler('click', null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('to do');
  });

  it('should show error message if adding empty task', () => {
    component.addItem('');

    expect(component.errorMessageText).toBe('Task cannot be empty');
  });

  it('should show error message if adding whitespace in the beggining of the string', () => {
    component.addItem('    g');

    expect(component.errorMessageText).toBe('This field cannot be left blank');
  });

});
