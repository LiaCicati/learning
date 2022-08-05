import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender, MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CommonModule } from '@angular/common';

describe('TodoItemComponent', () => {
  let spectator: Spectator<TodoItemComponent>;
  let component: TodoItemComponent;

  const createComponent = createComponentFactory({
    component: TodoItemComponent,
    imports: [CommonModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    // component.item.title = "hello"
    // console.log("!!!!!!!!!!!!!!!!!!!!!");

    // console.log(component.item);
  });

  it('should create', () => {
    // pending();
    console.log(spectator);
    // expect(component).toBeFalsy();
  });

  // it('should correctly render the passed @Input value', () => {
  //   component.item = { title: 'you' }; // 1
  //   spectator.detectChanges(); // 2
  //   const compiled = spectator.debugElement.nativeElement; // 2
  //   expect(compiled.innerHTML).toContain('you');
  // });
});
