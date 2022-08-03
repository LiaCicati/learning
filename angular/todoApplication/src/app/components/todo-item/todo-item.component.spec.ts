import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { CommonModule } from '@angular/common';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ TodoItemComponent ],
  //     imports: [TodoItemComponent]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(TodoItemComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(() => {
  //   return MockBuilder().keep(TodoItemComponent, {
  //     shallow: true, // all imports of StandaloneComponent will be mocks.
  //     export: true,
  //   });
  // });

  beforeEach(() => {
    return MockBuilder(
      // It can be an array too, if you want to keep and export more than 1 thing
      [
       TodoItemComponent,
       CommonModule
      ]
    );
  });

  it('should create', () => {
    const fixture = MockRender(TodoItemComponent);
    expect(
      fixture.point.componentInstance,
    ).toEqual(jasmine.any(TodoItemComponent));
  });
});
