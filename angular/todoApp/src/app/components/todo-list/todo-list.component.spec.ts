import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { TodoListService } from '../../services/todo-list.service';
import { StorageService } from 'src/app/services/storage.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  let service : TodoListService;
  let storage : StorageService;
  beforeEach(() => {
    return MockBuilder(TodoListComponent);
  });

  beforeEach(() => {
    return MockBuilder().keep(TodoListComponent, {
      shallow: true,
      export: true,
    });
  });

  // beforeEach(() => {
  // service = new TodoListService(storage);
  // component = new TodoListComponent(service);
  // });


  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ TodoListComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(TodoListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const fixture = MockRender(TodoListComponent);
    expect(
      fixture.point.componentInstance,
    ).toEqual(jasmine.any(TodoListComponent));
  });
});
