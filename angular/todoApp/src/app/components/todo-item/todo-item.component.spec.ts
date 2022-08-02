import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender, ngMocks, MockComponent, MockProvider } from 'ng-mocks';
import { TodoListService } from 'src/app/services/todo-list.service';
describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(() => {
    return MockBuilder(TodoItemComponent);
  });

  beforeEach(() => {
    return MockBuilder().keep(TodoItemComponent, {
      shallow: true,
      export: true,
    });
  });



  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ TodoItemComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(TodoItemComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const fixture = MockRender(TodoItemComponent);
    expect(
      fixture.point.componentInstance,
    ).toEqual(jasmine.any(TodoItemComponent));
  });

});

