import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { TodoListComponent } from './todo-list.component';
import { TodoListService } from '../../services/todo-list.service';
import { InputButtonComponent } from '../input-button/input-button.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../interfaces/todo-item';
import { By } from '@angular/platform-browser';
import { Spectator, createComponentFactory, createHostFactory } from '@ngneat/spectator';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  // let fixture: ComponentFixture<TodoListComponent>;
  let item: TodoItem;
  let spectator: Spectator<TodoListComponent>;
  const createComponent = createComponentFactory(TodoListComponent);
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [TodoListComponent]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(TodoListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(() => {
  //   return MockBuilder().keep(TodoListComponent, {
  //     shallow: true,
  //     export: true,
  //   });
  // });

  beforeEach(() => {
    return MockBuilder(
      // It can be an array too, if you want to keep and export more than 1 thing
      [
        TodoListComponent,
        TodoListService,
        InputButtonComponent,
        TodoItemComponent,
        CommonModule,
      ]
    );
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    const fixture = MockRender(TodoListComponent);
    expect(fixture.point.componentInstance).toEqual(
      jasmine.any(TodoListComponent)
    );
  });
  // it("should create ToDo List component", () => {
  //   expect(component).toBeTruthy();
  // });

  it('should use the todoList from the service', () => {
    const fixture = MockRender(TodoListComponent);
    const taskService = fixture.debugElement.injector.get(TodoListService);
    fixture.detectChanges();
    console.log(taskService.getTodoList());
    console.log(fixture.point.componentInstance.todoList);

    expect(taskService.getTodoList()).toEqual(
      fixture.point.componentInstance.todoList
    );
  });

  it('should create a new task', () => {
    const fixture = MockRender(TodoListComponent);
    fixture.point.componentInstance.addItem('hello');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('hello');
  });

  it('should add a task', () => {
    const fixture = MockRender(TodoListComponent);
    item = {
      title: 'hi',
      completed: false,
    };
    fixture.point.componentInstance.addItem(item.title);
    fixture.detectChanges();

    console.log(fixture.point.componentInstance.todoList.length);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('hi');
  });

  it('should remove a task', () => {
    const fixture = MockRender(TodoListComponent);

    fixture.point.componentInstance.removeItem(
      item
    );
    fixture.detectChanges();

    console.log(
      'List from remove: ' + fixture.point.componentInstance.todoList.length
    );
    console.log(fixture.point.componentInstance.todoList);

    expect(fixture.point.componentInstance.todoList.length).toEqual(2);
  });

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

    // newItem.completed = true;

    fixture.detectChanges();

    console.log(newItem.completed);

    expect(newItem.completed).toBeTruthy();
  });

  it('should get the list of tasks', () => {
    const fixture = MockRender(TodoListComponent);

    fixture.detectChanges();
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    console.log(fixture.point.componentInstance.todoList.length);

    expect(
      fixture.point.componentInstance.todoList.length
    ).toBeGreaterThanOrEqual(1);
  });


  it("should remove task upon click", () => {
    const fixture = MockRender(TodoListComponent);
    fixture.point.componentInstance.addItem('to do');
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css(".todo-item"))
      .query(By.css(".button-delete"))
      .triggerEventHandler("click", null);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("to do");
  });

  it('should trigger click event on addButon', () => {
    const fixture = MockRender(TodoListComponent);
    const { debugElement } = fixture;
    const addButton = debugElement.query(
      By.css('.button')
    );
    addButton.triggerEventHandler('click', null);
  });
});
